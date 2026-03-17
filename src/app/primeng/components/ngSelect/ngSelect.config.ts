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
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
            multiple: true,
            selectAllOption: 'Select All',
            options: [
                { value: 1, label: 'Option 1' },
                { value: 2, label: 'Option 2' },
                { value: 3, label: 'Option 3' },
                { value: 4, label: 'Option 4', disabled: true },
            ],
        },
    },
    properties: [
        createTextProperty({
            name: 'Select all options label',
            key: 'props.selectAllOption',
        }),
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
