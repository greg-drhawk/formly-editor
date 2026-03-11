import { Component, ViewChild } from '@angular/core';
import { EditorComponent, IDefaultForm } from '@sesan07/ngx-formly-editor';

@Component({
    selector: 'app-bootstrap',
    template: ` <button (click)="onClick()">Click</button><editor-main [defaultForm]="defaultForm"></editor-main>`,
    imports: [EditorComponent],
})
export class BootstrapComponent {
    @ViewChild(EditorComponent)
    public editor!: EditorComponent;

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

    onClick() {
        console.log(this.editor.formFieldsJSON);
    }
}
