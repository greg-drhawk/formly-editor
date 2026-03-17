import { Component, ViewChild } from '@angular/core';
import { EditorComponent, IDefaultForm } from '@sesan07/ngx-formly-editor';

@Component({
    selector: 'app-primeng',
    template: ` <button (click)="onClick()">Click</button><editor-main [defaultForm]="defaultForm"></editor-main>`,
    imports: [EditorComponent],
})
export class PrimeNGComponent {
    @ViewChild(EditorComponent)
    public editor!: EditorComponent;

    public defaultForm: IDefaultForm = {
        name: 'Default form of mine',
        fields: [
            {
                key: 'vocabularyId',
                type: 'ngselect',
                className: 'col-6',
                defaultValue: 'id', // Can be also bool, string, int
                props: {
                    label: 'Vocabolario',
                    multiple: false,
                    endpoint: 'http://localhost:8084/api/vocabularies',
                    valueProp: 'id',
                    labelProp: 'name',
                    options: [
                        {
                            value: 'DIPARTIMENTO',
                            label: 'Dipartimento',
                        },
                        {
                            value: 'SEZIONE',
                            label: 'Sezione',
                        },
                        {
                            value: 'SERVIZIO',
                            label: 'Servizio',
                        },
                    ],
                    clearable: true, //TO DO
                    required: false,
                    extract: 'structures', //TO DO
                    setAllValue: true, //TO DO
                    disabled: true,
                    dependOn: 'cycleId',
                    dependAttr: 'id',
                    removeSelected: '/allegati/CYC', //TO DO
                    removeSelectedId: true,
                    otherDep: [], //TO DO
                    mappedOptions: [
                        //TO DO
                        {
                            key: 'DIPARTIMENTO',
                            endpoint: '/structures/type/DIPARTIMENTO',
                        },
                        {
                            key: 'SEZIONE',
                            endpoint: '/structures/type/SEZIONE',
                        },
                        {
                            key: 'SERVIZIO',
                            endpoint: '/structures/type/SERVIZIO',
                        },
                    ],
                    fonte: 'cms', //TO DO
                    removeFromDataTable: true, //TO DO
                    skipCheck: true, //TO DO
                    readOnly: true, //TO DO
                    labelClass: 'col-auto d-inline',
                    fieldClass: 'break-all col-10 d-inline',
                    subLabelTitle: 'Specificare l’area di interesse tematica', //TO DO
                    subLabelClass: 'description formly-description', //TO DO
                },
                expressions: {
                    'model.typeObpo': "model.typeObiettivo!='OBPO' ? null : model.typeObpo",
                    hide: '!model.roles || model.roles === 2',
                    'props.disabled': 'model?.associaFiles && model?.associaFiles?.length > 0',
                    'model.tipologiaSpesa': 'model.categoriaSpesa ? model.tipologiaSpesa : null',
                    'props.options':
                        "model.categoriaSpesa === 'Uscite correnti' ? [ { id: 1, name: 'Acquisto di beni e di servizi' }, { id: 2, name: 'Contributi in conto esercizio' }] : []",
                },
                expressionProperties: {
                    'props.disabled': 'model.dataPubblicazione || model.dataScadenza',
                    'model.startData':
                        '((model, formState, field) => {if(!formState.defaultValueSet) {formState.defaultValueSet = true;const currentYear = new Date().getFullYear();return `${currentYear}-01-01`;} else  return model.startData})(model, formState, field)',
                    'model.endData':
                        '((model, formState, field) => {if(!formState.defaultValueSet2) {formState.defaultValueSet2 = true;const currentYear = new Date().getFullYear(); const futureYear = currentYear + 2; return `${futureYear}-12-31`;} else  return model.endData})(model, formState, field)',
                    'model.structureId':
                        '((model, formState, field) => model.typeStructure ? model.structureId : null)(model, formState, field)',
                },
                hideExpression: '!model.singleUse',
            },
        ],
        model: {},
    };

    onClick() {
        console.log(this.editor.formFieldsJSON);
    }
}
