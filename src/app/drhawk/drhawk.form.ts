import { FormlyFieldConfig } from '@ngx-formly/core';
import { IDefaultForm } from '@sesan07/ngx-formly-editor';

// File for default form configuration / Base Template

const fields: FormlyFieldConfig[] = [
    // See material/material.form.ts for an example
];

const model: Record<string, unknown> = {};

export const defaultForm: IDefaultForm = {
    name: 'Dr. Hawk Form Zero',
    fields,
    model,
};
