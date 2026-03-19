import {
    createArrayProperty,
    createBooleanProperty,
    createObjectProperty,
    createTextProperty,
    FieldTypeOption,
} from '@sesan07/ngx-formly-editor';

export const ngSelectTypeConfig: FieldTypeOption = {
    displayName: 'NgSelect',
    name: 'ngselect',
    keyGenerationPrefix: 'ngs',
    defaultConfig: {
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            required: true,
            multiple: false,
            options: [],
        },
    },
    properties: [
        createBooleanProperty({
            name: 'Multiple selections',
            key: 'props.multiple',
        }),
        createArrayProperty({
            name: 'Options',
            key: 'props.options',
            canAdd: true,
            childProperty: createObjectProperty({
                isRemovable: true,
                childProperties: [
                    createTextProperty({
                        name: 'Label',
                        key: 'label',
                    }),
                    createTextProperty({
                        name: 'Value',
                        key: 'value',
                        outputRawValue: true,
                    }),
                    createBooleanProperty({
                        name: 'Disabled',
                        key: 'disabled',
                    }),
                ],
            }),
        }),
    ],
};
