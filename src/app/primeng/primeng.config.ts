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
import { ngSelectTypeConfig } from './components/ngSelect/ngSelect.config';
import { defaultForm } from './primeng.form';
import { clearableWrapperConfig } from './wrappers/clearable/clearableWrapperConfig';
import { dependWrapperConfig } from './wrappers/depend/dependWrapperConfig';
import { descriptionWrapperConfig } from './wrappers/description/descriptionWrapperConfig';
import { disabledWrapperConfig } from './wrappers/disabled/disabledWrapperConfig';
import { endpointWrapperConfig } from './wrappers/endpoint/endpointWrapperConfig';
import { extractWrapperConfig } from './wrappers/extract/extractWrapperConfig';
import { fonteWrapperConfig } from './wrappers/fonte/fonteWrapperConfig';
import { formFieldCustomWrapperConfig } from './wrappers/form-field-custom/formFieldCustomWrapperConfig';
import { labelFieldClassesWrapperConfig } from './wrappers/label-field-classes/labelFieldClassesWrapperConfig';
import { mappedOptionsWrapperConfig } from './wrappers/mappedOptions/mappedOptionsWrapperConfig';
import { numberTypeWrapperConfig } from './wrappers/number-type/numberTypeWrapperConfig';
import { otherDepWrapperConfig } from './wrappers/otherDep/otherDepWrapperConfig';
import { readOnlyWrapperConfig } from './wrappers/readOnly/readOnlyWrapperConfig';
import { removeFromDataTableWrapperConfig } from './wrappers/removeFromDataTable/removeFromDataTableWrapperConfig';
import { removeSelectedWrapperConfig } from './wrappers/removeSelected/removeSelectedWrapperConfig';
import { setAllValueWrapperConfig } from './wrappers/setAllValue/setAllValueWrapperConfig';
import { skipControlsWrapperConfig } from './wrappers/skip-controls/skipControlsWrapperConfig';
import { skipCheckWrapperConfig } from './wrappers/skipCheck/skipCheckWrapperConfig';
import { subLabelWrapperConfig } from './wrappers/subLabel/subLabelWrapperConfig';

export const primengEditorConfig: EditorConfig = {
    id: 'editor-primeng',
    fieldOptions: [
        {
            displayName: 'Input',
            children: [inputTypeConfig, numberTypeConfig, ngInputTypeConfig],
        },
        checkboxTypeConfig,
        radioTypeConfig,
        {
            displayName: 'Select',
            children: [selectTypeConfig, ngSelectTypeConfig],
        },
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
        skipControlsWrapperConfig,
        labelFieldClassesWrapperConfig,
        clearableWrapperConfig,
        extractWrapperConfig,
        fonteWrapperConfig,
        mappedOptionsWrapperConfig,
        otherDepWrapperConfig,
        readOnlyWrapperConfig,
        removeFromDataTableWrapperConfig,
        removeSelectedWrapperConfig,
        setAllValueWrapperConfig,
        skipCheckWrapperConfig,
        subLabelWrapperConfig,
    ],
    defaultForm,
    stylesConfig,
};
