import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FileTypeComponent } from './file-type.component';

export function provideFileType() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: 'file',
                    component: FileTypeComponent,
                },
            ],
        }),
    ]);
}
