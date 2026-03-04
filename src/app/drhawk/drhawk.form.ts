import { FormlyFieldConfig } from '@ngx-formly/core';
import { IDefaultForm } from '@sesan07/ngx-formly-editor';

const fields: FormlyFieldConfig[] = [];

const model: Record<string, unknown> = {
    group: {
        card: {
            input: 'Hello!',
            num: 321,
            textarea: 'Bye!',
        },
        repeat: [
            {
                radio: 2,
                select: [1, 3],
            },
            {
                radio: 1,
                select: [2],
            },
        ],
    },
    checkbox: true,
};

export const defaultForm: IDefaultForm = {
    name: 'Dr. Hawk Form Zero',
    fields,
    model,
};
