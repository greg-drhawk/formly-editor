import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';

import { provideWrappers } from './../bootstrap/wrappers/wrappers.provider';
import { provideNgInput } from './components/ngInput/ngInput.provider';

export function providePrimeNG(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideNgInput(),
        provideWrappers(),

        importProvidersFrom([
            FormlyPrimeNGModule,
            FormlyModule.forRoot({
                validationMessages: [{ name: 'required', message: 'This field is required' }],
            }),
        ]),
    ]);
}
