import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const extractWrapperConfig: FieldWrapperOption = {
    name: 'extract',
    properties: [
        createTextProperty({
            name: 'Extract',
            key: 'props.extract',
        }),
    ],
};
