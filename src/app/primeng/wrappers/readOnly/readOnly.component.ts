import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'app-read-only',
    template: `<ng-container #fieldComponent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadOnlyComponent extends FieldWrapper {}
