import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const dependWrapperConfig: FieldWrapperOption = {
    name: 'depend',
    properties: [
        createTextProperty({
            name: 'Depend On',
            key: 'props.dependOn',
        }),
        createTextProperty({
            name: 'Depend Attr',
            key: 'props.dependAttr',
        }),
    ],
};
