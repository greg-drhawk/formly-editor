import { EditorConfig, bootstrapConfig as stylesConfig } from '@sesan07/ngx-formly-editor';

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
import { ngInputTypeConfig } from './components/ngInput/ngInput.config';
import { defaultForm } from './primeng.form';
import { dependWrapperConfig } from './wrappers/depend/dependWrapperConfig';
import { descriptionWrapperConfig } from './wrappers/description/descriptionWrapperConfig';
import { disabledWrapperConfig } from './wrappers/disabled/disabledWrapperConfig';
import { endpointWrapperConfig } from './wrappers/endpoint/endpointWrapperConfig';
import { formFieldCustomWrapperConfig } from './wrappers/form-field-custom/formFieldCustomWrapperConfig';
import { labelFieldClassesWrapperConfig } from './wrappers/label-field-classes/labelFieldClassesWrapperConfig';
import { numberTypeWrapperConfig } from './wrappers/number-type/numberTypeWrapperConfig';
import { requiredWrapperConfig } from './wrappers/required/requiredWrapperConfig';
import { skipControlsWrapperConfig } from './wrappers/skip-controls/skipControlsWrapperConfig';

export const primengEditorConfig: EditorConfig = {
    id: 'editor-primeng',
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
