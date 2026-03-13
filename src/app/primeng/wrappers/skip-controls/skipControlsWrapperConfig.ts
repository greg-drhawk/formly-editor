import { FieldWrapperOption, createBooleanProperty } from '@sesan07/ngx-formly-editor';

export const skipControlsWrapperConfig: FieldWrapperOption = {
    name: 'skip-controls',
    properties: [
        createBooleanProperty({
            name: 'Skip Controls',
            key: 'props.skipControls',
        }),
    ],
};
