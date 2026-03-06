import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-ng-input',
    templateUrl: './ngInput.component.html',
    styleUrl: './ngInput.component.css',
    imports: [ReactiveFormsModule, FormlyModule, CommonModule],
})
export class FormlyFieldNgInput extends FieldType<FieldTypeConfig> {}
