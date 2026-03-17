import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const removeFromDataTableWrapperConfig: FieldWrapperOption = {
    name: 'removeFromDataTable',
    properties: [
        createBooleanProperty({
            name: 'Remove From Data Table',
            key: 'props.removeFromDataTable',
        }),
    ],
};
