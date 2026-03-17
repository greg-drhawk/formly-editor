import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'app-fonte',
    template: `<ng-container #fieldComponent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FonteComponent extends FieldWrapper {}
