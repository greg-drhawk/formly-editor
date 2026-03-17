import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const subLabelWrapperConfig: FieldWrapperOption = {
    name: 'subLabel',
    properties: [
        createTextProperty({
            name: 'Sub Label Title',
            key: 'props.subLabelTitle',
        }),
        createTextProperty({
            name: 'Sub Label Class',
            key: 'props.subLabelClass',
        }),
    ],
};
