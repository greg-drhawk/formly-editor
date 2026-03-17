import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-endpoint',
  template: `<ng-container #fieldComponent></ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndpointComponent extends FieldWrapper {}
