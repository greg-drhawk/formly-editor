import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const disabledWrapperConfig: FieldWrapperOption = {
    name: 'disabled',
    properties: [
        createBooleanProperty({
            name: 'Disabled',
            key: 'props.disabled',
        }),
    ],
};
