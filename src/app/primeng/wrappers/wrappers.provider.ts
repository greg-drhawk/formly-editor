import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FonteComponent } from 'src/app/primeng/wrappers/fonte/fonte.component';
import { MappedOptionsComponent } from 'src/app/primeng/wrappers/mappedOptions/mappedOptions.component';
import { OtherDepComponent } from 'src/app/primeng/wrappers/otherDep/otherDep.component';
import { ReadOnlyComponent } from 'src/app/primeng/wrappers/readOnly/readOnly.component';
import { RemoveFromDataTableComponent } from 'src/app/primeng/wrappers/removeFromDataTable/removeFromDataTable.component';
import { SkipCheckComponent } from 'src/app/primeng/wrappers/skipCheck/skipCheck.component';
import { SubLabelComponent } from 'src/app/primeng/wrappers/subLabel/subLabel.component';
import { ClearableComponent } from './clearable/clearable.component';
import { DependComponent } from './depend/depend.component';
import { DescriptionComponent } from './description/description.component';
import { DisabledComponent } from './disabled/disabled.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { ExtractComponent } from './extract/extract.component';
import { FormFieldCustomComponent } from './form-field-custom/form-field-custom.component';
import { LabelFieldClassesComponent } from './label-field-classes/label-field-classes.component';
import { NumberTypeComponent } from './number-type/numberType.component';
import { RemoveSelectedComponent } from './removeSelected/removeSelected.component';
import { SetAllValueComponent } from './setAllValue/setAllValue.component';
import { SkipControlsComponent } from './skip-controls/skipControls.component';

export function provideWrappers() {
    return importProvidersFrom([
        FormlyModule.forChild({
            wrappers: [
                {
                    name: 'clearable',
                    component: ClearableComponent,
                },
                {
                    name: 'endpoint',
                    component: EndpointComponent,
                },
                {
                    name: 'depend',
                    component: DependComponent,
                },
                {
                    name: 'description',
                    component: DescriptionComponent,
                },
                {
                    name: 'extract',
                    component: ExtractComponent,
                },
                {
                    name: 'fonte',
                    component: FonteComponent,
                },
                {
                    name: 'mappedOptions',
                    component: MappedOptionsComponent,
                },
                {
                    name: 'number',
                    component: NumberTypeComponent,
                },
                {
                    name: 'otherDep',
                    component: OtherDepComponent,
                },
                {
                    name: 'readOnly',
                    component: ReadOnlyComponent,
                },
                {
                    name: 'removeFromDataTable',
                    component: RemoveFromDataTableComponent,
                },
                {
                    name: 'removeSelected',
                    component: RemoveSelectedComponent,
                },
                {
                    name: 'setAllValue',
                    component: SetAllValueComponent,
                },
                {
                    name: 'skipCheck',
                    component: SkipCheckComponent,
                },
                {
                    name: 'skip-controls',
                    component: SkipControlsComponent,
                },
                {
                    name: 'subLabel',
                    component: SubLabelComponent,
                },
                {
                    name: 'disabled',
                    component: DisabledComponent,
                },
                {
                    name: 'form-field-custom',
                    component: FormFieldCustomComponent,
                },
                {
                    name: 'label-field-classes',
                    component: LabelFieldClassesComponent,
                },
            ],
        }),
    ]);
}
