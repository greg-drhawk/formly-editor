import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const skipCheckWrapperConfig: FieldWrapperOption = {
    name: 'skipCheck',
    properties: [
        createBooleanProperty({
            name: 'Skip Check',
            key: 'props.skipCheck',
        }),
    ],
};
