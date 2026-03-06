import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const labelFieldClassesWrapperConfig: FieldWrapperOption = {
    name: 'label-field-classes',
    properties: [
        createTextProperty({
            name: 'Label Class',
            key: 'props.labelClass',
        }),
        createTextProperty({
            name: 'Field Class',
            key: 'props.fieldClass',
        }),
    ],
};
