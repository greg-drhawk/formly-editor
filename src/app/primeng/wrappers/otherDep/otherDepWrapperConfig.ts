import { FieldWrapperOption, createArrayProperty, createObjectProperty, createTextProperty } from '@sesan07/ngx-formly-editor';

export const otherDepWrapperConfig: FieldWrapperOption = {
    name: 'otherDep',
    properties: [
        createArrayProperty({
            name: 'Other Dependencies',
            key: 'props.otherDep',
            canAdd: true,
            childProperty: createObjectProperty({
                isRemovable: true,
                childProperties: [
                    createTextProperty({
                        name: 'Key',
                        key: 'key',
                    }),
                    createTextProperty({
                        name: 'Value',
                        key: 'value',
                    }),
                ],
            }),
        }),
    ],
};
