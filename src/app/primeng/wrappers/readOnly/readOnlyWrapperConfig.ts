import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const readOnlyWrapperConfig: FieldWrapperOption = {
    name: 'readOnly',
    properties: [
        createBooleanProperty({
            name: 'Read Only',
            key: 'props.readOnly',
        }),
    ],
};
