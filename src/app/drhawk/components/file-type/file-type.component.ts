import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';

@Component({
    selector: 'app-file-type',
    templateUrl: './file-type.component.html',
    imports: [FormlyModule, MatIconButton, MatIcon, MatButton],
})
export class FileTypeComponent extends FieldArrayType {}
