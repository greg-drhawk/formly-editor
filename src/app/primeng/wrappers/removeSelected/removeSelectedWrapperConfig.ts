import { FieldWrapperOption, createTextProperty, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const removeSelectedWrapperConfig: FieldWrapperOption = {
    name: 'removeSelected',
    properties: [
        createTextProperty({
            name: 'Remove Selected',
            key: 'props.removeSelected',
        }),
        createBooleanProperty({
            name: 'Remove Selected Id',
            key: 'props.removeSelectedId',
        }),
    ],
};
