import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { DependComponent } from './depend/depend.component';
import { DescriptionComponent } from './description/description.component';
import { DisabledComponent } from './disabled/disabled.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { FormFieldCustomComponent } from './form-field-custom/form-field-custom.component';
import { LabelFieldClassesComponent } from './label-field-classes/label-field-classes.component';
import { NumberTypeComponent } from './number-type/numberType.component';
import { RequiredComponent } from './required/required.component';
import { SkipControlsComponent } from './skip-controls/skipControls.component';

export function provideWrappers() {
    return importProvidersFrom([
        FormlyModule.forChild({
            wrappers: [
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
                    name: 'number',
                    component: NumberTypeComponent,
                },
                {
                    name: 'skip-controls',
                    component: SkipControlsComponent,
                },
                {
                    name: 'required',
                    component: RequiredComponent,
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
