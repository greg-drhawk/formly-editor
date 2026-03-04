# Formly Editor

A configurable editor for ngx-formly forms.

This project uses standalone components.

Demo: https://formly-editor.sesan.dev

![Demo Screenshot](docs/img/screenshot.png 'Demo Screenshot')

## How to run

-   Clone this repo: `git clone https://github.com/sesan07/formly-editor.git`
-   Install dependencies: `npm i`
-   Start app: `npm start`

## Setup

### Create a config (see src/app/\<module\>/\<module\>.config.ts for an example)

```typescript
import { EditorConfig, createTextProperty } from '@sesan07/ngx-formly-editor';

// Configure input type
const inputTypeConfig: FieldTypeOption = {
    displayName: 'Input', // Name displayed on the UI
    name: 'input', // Name (type) configured in formly
    keyGenerationPrefix: 'inp', // Used to generate keys for this field type (optional)
    defaultConfig: { // Default formly config when creating a field of this type
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },
    properties: [ // The configurable properties to display on the UI for this field type (optional)
        createTextProperty({
            name: 'Type',
            key: 'props.type',
        }),
        ...
    ],
};

// Configure card wrapper (custom wrapper)
// Da quanto compreso, se il campo ha questo wrapper, allora verranno mostrati l'insieme di campi all'interno del wrapper
const cardWrapperConfig: FieldWrapperOption = {
    name: 'card',
    properties: [ // The configurable properties to display when a field has this wrapper (optional)
        createTextProperty({
            name: 'Card Title',
            key: 'props.cardTitle',
        }),
        ...
    ],
};

// Configure validator options that can be set
export const validatorOptions: ValidatorOption[] = [
    {
        name: 'Ip',
        key: 'ip',
    }
    ...
];

export const editorConfig: EditorConfig = {
    id: 'editor',
    fieldOptions: [ // Configs for fields or field categories
        { // A field category
            displayName: 'Input',
            children: [inputTypeConfig, anotherConfig],
        },
        yetAnotherConfig,
        anotherCategory,
        ...
    ],
    wrapperOptions: [cardWrapperConfig], // configs for wrappers
    validatorOptions: validatorOptions,
    defaultForm: {
        name: 'Form Zero',
        fields: [...], // Formly field configs
        model: {...}
    },
};
```

These helper functions can be used to create properties

-   `createArrayProperty({...})`
-   `createBooleanProperty({...})`
-   `createObjectProperty({...})`
-   `createSelectProperty({...})`
-   `createTextProperty({...})`

### Create a provider file

You should insert here custom fields that you want to create

```typescript
import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { provideFileType } from 'src/app/drhawk/components/file-type/file-type.provider';
import { provideCardWrapper } from './components/card-wrapper/card-wrapper.provider';
import { provideRepeatingSectionType } from './components/repeating-section-type/repeating-section-type.provider';
import { ipAsyncValidator, ipValidator, ipValidatorMessage } from './drhawk.utils';

export function provideDrhawk(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideCardWrapper(),
        provideRepeatingSectionType(),
        provideFileType(),
        importProvidersFrom([
            FormlyMaterialModule,
            FormlyModule.forRoot({
                validators: [
                    { name: 'ip', validation: ipValidator },
                    { name: 'ipAsync', validation: ipAsyncValidator },
                ],
                validationMessages: [
                    { name: 'ip', message: ipValidatorMessage },
                    { name: 'ipAsync', message: 'This is not a valid IP Address' },
                    { name: 'required', message: 'This field is required' },
                ],
            }),
        ]),
    ]);
}
```

### Create and adjust route file

This is done via routes (see app.routes.ts for an example)

### Provide the Editor config

```typescript
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { provideEditor, provideEditorConfig, withConfig } from '@sesan07/ngx-formly-editor';

import { editorConfig1, editorConfig2 } from './editor.config';

// Single route setup (see app.config.ts)
export const appConfig: ApplicationConfig = {
    providers: [
        ...
        // Provide the editor and config
        provideEditor(withConfig(editorConfig1)),
        // Ngx-formly configuration
        importProvidersFrom([
            FormlyModule.forRoot({ ... }),
        ]),
        ...
    ],
};

// Multi route setup (see app.routes.ts)
export const appConfig: ApplicationConfig = {
    providers: [
        ...
        // Provide the editor
        provideEditor(),
        provideRouter([
            {
                path: 'path1',
                // Provide editorConfig1 for path1
                providers: [provideEditorConfig(editorConfig1)],
            },
            {
                path: 'path2',
                // Provide editorConfig2 for path2
                providers: [provideEditorConfig(editorConfig2)],
            },
        ])
        // Ngx-formly configuration
        importProvidersFrom([
            FormlyModule.forRoot({ ... }),
        ]),
        ...
    ],
};
```

`EditorModule.forRoot(config?)` and `EditorModule.forChild(config)` are also available for non standalone apps.

### Use the Editor Component

see src/app/\<module\>/\<module\>.component.ts for an example

```typescript
import { Component } from '@angular/core';
import { EditorComponent } from '@sesan07/ngx-formly-editor';

@Component({
    selector: 'app-example',
    template: ` <editor-main></editor-main> `,
    standalone: true,
    imports: [EditorComponent],
})
export class ExampleComponent {}
```

### Import the editor's styles into your app

```scss
// Styles required by the editor
@import '@sesan07/ngx-formly-editor/styles';

// Generated tailwind styles for the editor's styling system if using tailwindConfig
@import '@sesan07/ngx-formly-editor/tailwind';
```

Questions or improvement suggestions are welcome!
