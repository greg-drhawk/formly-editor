import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { FormlyModule, provideFormlyCore } from '@ngx-formly/core';
import { withFormlyPrimeNG } from '@ngx-formly/primeng';
import { provideBootstrapWrappers } from './../bootstrap/wrappers/wrappers.provider';
import { provideWrappers } from './../primeng/wrappers/wrappers.provider';
import { provideNgInput } from './components/ngInput/ngInput.provider';
import { provideNgSelect } from './components/ngSelect/ngSelect.provider';

export function providePrimeNG(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideFormlyCore(withFormlyPrimeNG()),

        importProvidersFrom([
            FormlyModule.forRoot({
                validationMessages: [{ name: 'required', message: 'This field is required' }],
            }),
        ]),
        provideNgInput(),
        provideNgSelect(),
        provideBootstrapWrappers(),
        provideWrappers(),
    ]);
}
