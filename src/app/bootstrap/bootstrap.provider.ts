import { EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';

import { provideWrappers } from 'src/app/bootstrap/wrappers/wrappers.provider';
import { provideNgInput } from './components/ngInput/ngInput.provider';

export function provideBootstrap(): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideNgInput(),
        provideWrappers(),

        importProvidersFrom([
            FormlyBootstrapModule,
            FormlyModule.forRoot({
                validationMessages: [{ name: 'required', message: 'This field is required' }],
            }),
        ]),
    ]);
}
