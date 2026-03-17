import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { ngSelectTypeConfig } from 'src/app/primeng/components/ngSelect/ngSelect.config';
import { FormlyFieldNgSelect } from './ngSelect.component';

export function provideNgSelect() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: ngSelectTypeConfig.name,
                    component: FormlyFieldNgSelect,
                },
            ],
        }),
    ]);
}
