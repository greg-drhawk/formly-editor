import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldNgInput } from './ngInput.component';

export function provideNgInput() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: 'nginput',
                    component: FormlyFieldNgInput,
                },
            ],
        }),
    ]);
}
