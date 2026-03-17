import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { SelectModule } from 'primeng/select';
import { isObservable, Observable, of } from 'rxjs';

@Component({
    selector: 'formly-field-ng-select',
    templateUrl: './ngSelect.component.html',
    styleUrl: './ngSelect.component.css',
    imports: [ReactiveFormsModule, FormlyModule, CommonModule, SelectModule],
})
export class FormlyFieldNgSelect extends FieldType<FieldTypeConfig> {
    options$!: Observable<any[]>;

    ngOnInit() {
        const opts = this.props.options;

        this.options$ = isObservable(opts) ? opts : of(opts || []);
    }
}
