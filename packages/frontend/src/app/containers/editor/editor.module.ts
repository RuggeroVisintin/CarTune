import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewComponent } from './components/preview/preview.component';
import { EditorComponent } from './editor.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PreviewComponent,
        EditorComponent
    ],
    exports: [
        EditorComponent,
    ]
})
export class EditorModule { }