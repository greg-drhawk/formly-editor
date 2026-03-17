import { FieldWrapperOption, createArrayProperty, createObjectProperty, createTextProperty } from '@sesan07/ngx-formly-editor';

export const mappedOptionsWrapperConfig: FieldWrapperOption = {
    name: 'mappedOptions',
    properties: [
        createArrayProperty({
            name: 'Mapped Options',
            key: 'props.mappedOptions',
            canAdd: true,
            childProperty: createObjectProperty({
                isRemovable: true,
                childProperties: [
                    createTextProperty({
                        name: 'Key',
                        key: 'key',
                    }),
                    createTextProperty({
                        name: 'Endpoint',
                        key: 'endpoint',
                    }),
                ],
            }),
        }),
    ],
};
