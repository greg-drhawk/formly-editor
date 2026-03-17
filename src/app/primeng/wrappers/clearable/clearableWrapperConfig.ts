import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const clearableWrapperConfig: FieldWrapperOption = {
    name: 'clearable',
    properties: [
        createBooleanProperty({
            name: 'Clearable',
            key: 'props.clearable',
        }),
    ],
};
