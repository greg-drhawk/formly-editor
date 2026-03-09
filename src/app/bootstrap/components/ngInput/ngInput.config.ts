import { createBooleanProperty, createTextProperty, FieldTypeOption } from '@sesan07/ngx-formly-editor';

export const ngInputTypeConfig: FieldTypeOption = {
    displayName: 'NgInput',
    name: 'nginput',
    keyGenerationPrefix: 'ngi',
    defaultConfig: {
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },
    properties: [
        createTextProperty({
            name: 'Label Prop',
            key: 'props.labelProp',
        }),
        createTextProperty({
            name: 'Value Prop',
            key: 'props.valueProp',
        }),
        createBooleanProperty({
            name: 'ReadOnly',
            key: 'props.readOnly',
        }),
    ],
};
