import { EditorConfig, bootstrapConfig as stylesConfig } from '@sesan07/ngx-formly-editor';

import { ngSelectTypeConfig } from 'src/app/primeng/components/ngSelect/ngSelect.config';
import { clearableWrapperConfig } from 'src/app/primeng/wrappers/clearable/clearableWrapperConfig';
import { extractWrapperConfig } from 'src/app/primeng/wrappers/extract/extractWrapperConfig';
import { fonteWrapperConfig } from 'src/app/primeng/wrappers/fonte/fonteWrapperConfig';
import { mappedOptionsWrapperConfig } from 'src/app/primeng/wrappers/mappedOptions/mappedOptionsWrapperConfig';
import { otherDepWrapperConfig } from 'src/app/primeng/wrappers/otherDep/otherDepWrapperConfig';
import { readOnlyWrapperConfig } from 'src/app/primeng/wrappers/readOnly/readOnlyWrapperConfig';
import { removeFromDataTableWrapperConfig } from 'src/app/primeng/wrappers/removeFromDataTable/removeFromDataTableWrapperConfig';
import { removeSelectedWrapperConfig } from 'src/app/primeng/wrappers/removeSelected/removeSelectedWrapperConfig';
import { setAllValueWrapperConfig } from 'src/app/primeng/wrappers/setAllValue/setAllValueWrapperConfig';
import { skipCheckWrapperConfig } from 'src/app/primeng/wrappers/skipCheck/skipCheckWrapperConfig';
import { subLabelWrapperConfig } from 'src/app/primeng/wrappers/subLabel/subLabelWrapperConfig';
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
