import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const setAllValueWrapperConfig: FieldWrapperOption = {
    name: 'setAllValue',
    properties: [
        createBooleanProperty({
            name: 'Set All Value',
            key: 'props.setAllValue',
        }),
    ],
};
