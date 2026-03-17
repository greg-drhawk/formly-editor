import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-ng-select',
    templateUrl: './ngSelect.component.html',
    styleUrl: './ngSelect.component.css',
    imports: [ReactiveFormsModule, FormlyModule, CommonModule],
})
export class FormlyFieldNgSelect extends FieldType<FieldTypeConfig> {}
