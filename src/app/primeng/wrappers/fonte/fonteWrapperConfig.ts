import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const fonteWrapperConfig: FieldWrapperOption = {
    name: 'fonte',
    properties: [
        createTextProperty({
            name: 'Fonte',
            key: 'props.fonte',
        }),
    ],
};
