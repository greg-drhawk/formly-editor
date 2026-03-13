import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const descriptionWrapperConfig: FieldWrapperOption = {
    name: 'description',
    properties: [
        createTextProperty({
            name: 'Description',
            key: 'props.description',
        }),
    ],
};
