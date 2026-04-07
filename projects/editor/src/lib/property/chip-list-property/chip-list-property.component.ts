import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRemove, MatChipRow } from '@angular/material/chips';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { BehaviorSubject } from 'rxjs';

import { FieldType } from '@ngx-formly/core';
import { EditorService } from '../../editor.service';
import { TreeItemComponent } from '../../tree-item/tree-item.component';
import { BasePropertyDirective } from '../base-property.directive';
import { PropertyKeyComponent } from '../property-key/property-key.component';
import { IChipListProperty } from './chip-list-property.types';

@Component({
    selector: 'editor-chip-list-property',
    templateUrl: './chip-list-property.component.html',
    styleUrls: ['./chip-list-property.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TreeItemComponent,
        PropertyKeyComponent,
        NgTemplateOutlet,
        MatFormField,
        MatLabel,
        MatChipGrid,
        MatChipRow,
        MatIcon,
        MatChipRemove,
        ReactiveFormsModule,
        MatAutocompleteTrigger,
        MatChipInput,
        MatAutocomplete,
        MatOption,
        MatMenu,
        MatMenuItem,
        AsyncPipe,
    ],
})
export class ChipListPropertyComponent extends BasePropertyDirective<IChipListProperty, string | string[]> {
    @ViewChild('input') inputElementRef: ElementRef<HTMLInputElement>;

    public formControl = new FormControl<string>(null);
    public separatorKeysCodes: number[] = [ENTER, COMMA];
    public selectedOptions$ = new BehaviorSubject<string[]>([]);
    public selectableOptions: string[];
    public filteredOptions$ = new BehaviorSubject<string[]>([]);
    public hasOptions: boolean;

    protected defaultValue = null;

    private readonly _maxFilteredItems = 50;

    constructor(private editorService: EditorService) {
        super();
    }

    private readonly _fieldType_wrappers: Record<string, string[]> = {
        // Add common wrappers for all field types
        common: ['form-field', 'disabled', 'readOnly'],
        nginput: [
            'form-field',
            'disabled',
            'depend',
            'endpoint',
            'form-field-custom',
            'label-field-classes',
            'readOnly',
            'number',
            'skip-controls',
        ],
        ngselect: [
            'form-field',
            'disabled',
            'endpoint',
            'form-field-custom',
            'clearable',
            'extract',
            'setAllValue',
            'disabled',
            'depend',
            'removeSelected',
            'otherDep',
            'mappedOptions',
            'fonte',
            'removeFromDataTable',
            'skipCheck',
            'readOnly',
            'label-field-classes',
            'subLabel',
        ],
        'html-editor': ['form-field'],
        ngradio: ['form-field', 'description', 'extract', 'endpoint'],
        ngtransfer: ['form-field', 'endpoint', 'extract'],
        typologic: ['form-field'],
        file: ['form-field'],
        'modal-input': ['form-field', 'disabled'],
    };

    private readonly wrapper_fields: Record<string, string[]> = {
        'form-field': ['label', 'placeholder', 'description', 'required'],
        'form-field-custom': ['labelProp', 'valueProp'],
        endpoint: ['endpoint'],
        depend: ['dependOn', 'dependAttr'],
        number: ['min', 'max', 'step', 'type'],
        description: ['description'],
        'label-field-classes': ['labelClass', 'fieldClass'],
        clearable: ['clearable'],
        extract: ['extract', 'extractFrom', 'extractSecondary'],
        fonte: ['fonte'],
        mappedOptions: ['mappedOptions'],
        removeFromDataTable: ['removeFromDataTable'],
        removeSelected: ['removeSelected', 'removeSelectedId'],
        setAllValue: ['setAllValue'],
        'skip-controls': ['skipControls'],
        subLabel: ['subLabelTitle', 'subLabelClass'],
        modal: ['parent'],
        skipCheck: ['skipCheck'],
        otherDep: ['otherDep'],
        disabled: ['disabled'],
        readOnly: ['readOnly'],
    };

    onAdd(event: MatChipInputEvent): void {
        const input: HTMLInputElement = event.input;
        const value: string = event.value;
        this._updateSelectedOptions();

        if ((value || '').trim()) {
            this.selectedOptions$.next([...this.selectedOptions$.value, value.trim()]);
            this._updateValue();
        }

        if (input) {
            input.value = '';
        }

        this.formControl.setValue(null);
    }

    onRemove(option: string): void {
        this._updateSelectedOptions();
        const index: number = this.selectedOptions$.value.indexOf(option);
        if (index >= 0) {
            const newOptions = [...this.selectedOptions$.value];
            newOptions.splice(index, 1);
            this.selectedOptions$.next(newOptions);
            this._updateValue();
        }

        // Insert check for removing options from jsonSchema
        // if wrapper is in list wrapper_fields
        if (this.wrapper_fields[option]) {
            this.wrapper_fields[option].forEach(field => {
                this._modifyValue(null, [`props`, field]); // OK ma setta null
            });
        }
    }

    onSelected(event: MatAutocompleteSelectedEvent): void {
        this._updateSelectedOptions();
        this.selectedOptions$.next([...this.selectedOptions$.value, event.option.viewValue]);
        this.inputElementRef.nativeElement.value = '';
        this.formControl.setValue(null);
        this._updateValue();
    }

    protected _onChanged(isFirstChange: boolean): void {
        if (isFirstChange) {
            this.formControl.valueChanges.subscribe(options => this._updateFilteredOptions(options));
        }

        this.hasOptions = this.property.isRemovable;
        this.selectableOptions = [...this.property.options];
        this._updateSelectedOptions();
        this._updateFilteredOptions();
    }

    protected override _isValidProperty(x: any): x is IChipListProperty {
        return Array.isArray(x.options) && x.options.every(v => typeof v === 'string') && this._isBaseProperty(x);
    }

    private _updateSelectedOptions(): void {
        if (this.currentValue) {
            // If the target already has some selection
            const existingOptions: string[] = this.property.outputString
                ? (this.currentValue as string).split(' ')
                : (this.currentValue as string[]);

            this.selectedOptions$.next([...existingOptions]);
        } else {
            this.selectedOptions$.next([]);
        }
    }

    private _updateFilteredOptions(value?: string): void {
        let selectable: string[] = this.selectableOptions;

        // Filter based on selected field type
        const fieldType = this.editorService.getActiveField()?.type;
        let fieldTypeKey: string;
        if (fieldType instanceof FieldType) {
            // can be different from string
            fieldTypeKey = fieldType.id;
        } else {
            fieldTypeKey = fieldType as string;
        }

        // Since is a generic component, filtering only chip list of type wrappers, based on selected field type
        if (this.property.key === 'wrappers' && this._fieldType_wrappers[fieldTypeKey]) {
            // If the current selected field is included in the map fieldType-Wrappers
            const wrappers = this._fieldType_wrappers[fieldTypeKey];

            selectable = selectable.filter(
                option => wrappers.includes(option) && !this.selectedOptions$.value.includes(option)
            );
        } else {
            selectable = selectable.filter(option => !this.selectedOptions$.value.includes(option)); // Removing already selected options
        }

        // Applying filter by keyword inserted
        selectable = value
            ? selectable.filter(option => option.toLowerCase().includes(value.toLowerCase()))
            : selectable;

        this.filteredOptions$.next(selectable.slice(0, this._maxFilteredItems));
    }

    private _updateValue(): void {
        let newValue: string | string[];
        if (this.property.outputString) {
            newValue = this.selectedOptions$.value.join(' ');
        } else {
            newValue = this.selectedOptions$.value.slice();
        }

        this._modifyValue(newValue);
    }
}
