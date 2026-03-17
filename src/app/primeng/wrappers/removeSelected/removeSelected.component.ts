import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'app-remove-selected',
    template: `<ng-container #fieldComponent></ng-container>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveSelectedComponent extends FieldWrapper {}
