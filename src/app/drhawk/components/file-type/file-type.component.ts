import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, computed, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent, MatOption } from '@angular/material/autocomplete';
import { MatChipGrid, MatChipInputEvent, MatChipRow, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FieldType, FormlyModule } from '@ngx-formly/core';

@Component({
    templateUrl: './file-type.component.html',
    imports: [
        FormlyModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatOption,
        MatIconModule,
        MatChipRow,
        MatChipGrid,
        MatChipsModule,
        FormsModule,
    ],
})
export class FileTypeComponent extends FieldType {
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    readonly currentFormat = model('');
    readonly formats = signal(['']);
    readonly allFormats: string[] = ['image/png', 'image/jpeg'];

    readonly filteredFormats = computed(() => {
        const currentFormat = this.currentFormat().toLowerCase();
        return currentFormat
            ? this.allFormats.filter(format => format.toLowerCase().includes(currentFormat))
            : this.allFormats.slice();
    });

    readonly announcer = inject(LiveAnnouncer);

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value) {
            this.formats.update(formats => [...formats, value]);
        }
        this.currentFormat.set('');
    }

    remove(format: string): void {
        this.formats.update(formats => {
            const index = formats.indexOf(format);
            if (index < 0) {
                return formats;
            }

            formats.splice(index, 1);
            this.announcer.announce(`Removed ${format}`);
            return [...formats];
        });
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.formats.update(formats => [...formats, event.option.viewValue]);
        this.currentFormat.set('');
        event.option.deselect();
    }
}
