import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const formFieldCustomWrapperConfig: FieldWrapperOption = {
    name: 'form-field-custom',
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
        }),
    ],
};
