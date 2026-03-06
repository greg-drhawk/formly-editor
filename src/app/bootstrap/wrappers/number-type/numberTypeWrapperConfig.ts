import { FieldWrapperOption, createSelectProperty, createTextProperty } from '@sesan07/ngx-formly-editor';

export const numberTypeWrapperConfig: FieldWrapperOption = {
    name: 'number',
    properties: [
        createSelectProperty({
            name: 'Type',
            key: 'props.type',
            options: [{ label: 'Number', value: 'number' }],
        }),
        createTextProperty({
            name: 'Step',
            key: 'props.step',
        }),
        createTextProperty({
            name: 'Min',
            key: 'props.min',
        }),
        createTextProperty({
            name: 'Max',
            key: 'props.max',
        }),
    ],
};
