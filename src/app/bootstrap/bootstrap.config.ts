import { EditorConfig, bootstrapConfig as stylesConfig } from '@sesan07/ngx-formly-editor';

import { descriptionWrapperConfig } from 'src/app/bootstrap/wrappers/description/descriptionWrapperConfig';
import { disabledWrapperConfig } from 'src/app/bootstrap/wrappers/disabled/disabledWrapperConfig';
import { formFieldCustomWrapperConfig } from 'src/app/bootstrap/wrappers/form-field-custom/formFieldCustomWrapperConfig';
import { numberTypeWrapperConfig } from 'src/app/bootstrap/wrappers/number-type/numberTypeWrapperConfig';
import { requiredWrapperConfig } from 'src/app/bootstrap/wrappers/required/requiredWrapperConfig';
import { skipControlsWrapperConfig } from 'src/app/bootstrap/wrappers/skip-controls/skipControlsWrapperConfig';
import {
    checkboxTypeConfig,
    formFieldWrapperConfig,
    groupTypeConfig,
    inputTypeConfig,
    numberTypeConfig,
    radioTypeConfig,
    selectTypeConfig,
    textareaTypeConfig,
} from '../material/material.config';
import { defaultForm } from './bootstrap.form';
import { ngInputTypeConfig } from './components/ngInput/ngInput.config';
import { dependWrapperConfig } from './wrappers/depend/dependWrapperConfig';
import { endpointWrapperConfig } from './wrappers/endpoint/endpointWrapperConfig';
import { labelFieldClassesWrapperConfig } from './wrappers/label-field-classes/labelFieldClassesWrapperConfig';

export const bootstrapEditorConfig: EditorConfig = {
    id: 'editor-bootstrap',
    fieldOptions: [
        {
            displayName: 'Input',
            children: [inputTypeConfig, numberTypeConfig, ngInputTypeConfig],
        },
        checkboxTypeConfig,
        radioTypeConfig,
        selectTypeConfig,
        textareaTypeConfig,
        groupTypeConfig,
    ],
    wrapperOptions: [
        formFieldWrapperConfig,
        formFieldCustomWrapperConfig,
        endpointWrapperConfig,
        dependWrapperConfig,
        numberTypeWrapperConfig,
        descriptionWrapperConfig,
        disabledWrapperConfig,
        requiredWrapperConfig,
        skipControlsWrapperConfig,
        labelFieldClassesWrapperConfig,
    ],
    defaultForm,
    stylesConfig,
};
