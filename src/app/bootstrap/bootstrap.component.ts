import { Component } from '@angular/core';
import { EditorComponent, IDefaultForm } from '@sesan07/ngx-formly-editor';

@Component({
    selector: 'app-bootstrap',
    template: ` <editor-main [defaultForm]="defaultForm"></editor-main> `,
    imports: [EditorComponent],
})
export class BootstrapComponent {
    public defaultForm: IDefaultForm = {
        name: 'Default form of mine',
        fields: [
            {
                key: 'name',
                type: 'input',
                props: {
                    label: 'Name',
                    placeholder: 'Enter your name',
                },
            },
        ],
        model: {},
    };
}
