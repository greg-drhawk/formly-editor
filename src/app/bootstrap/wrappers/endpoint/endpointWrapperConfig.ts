import { FieldWrapperOption, createTextProperty } from '@sesan07/ngx-formly-editor';

export const endpointWrapperConfig: FieldWrapperOption = {
    name: 'endpoint',
    properties: [
        createTextProperty({
            name: 'Endpoint',
            key: 'props.endpoint',
        }),
    ],
};
