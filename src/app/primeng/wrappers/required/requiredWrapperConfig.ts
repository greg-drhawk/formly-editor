import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const requiredWrapperConfig: FieldWrapperOption = {
    name: 'required',
    properties: [
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
        }),
    ],
};
