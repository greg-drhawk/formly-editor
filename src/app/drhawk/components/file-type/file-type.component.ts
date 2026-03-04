import { Component } from '@angular/core';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';

@Component({
    selector: 'app-file-type',
    templateUrl: './file-type.component.html',
    imports: [FormlyModule],
})
export class FileTypeComponent extends FieldArrayType {}
