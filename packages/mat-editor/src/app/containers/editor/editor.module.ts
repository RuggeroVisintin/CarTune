import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreviewComponent } from './components/preview/preview.component';
import { EditorComponent } from './editor.component';
import { EditPropsComponent } from './components/editProps/editProps.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PreviewComponent,
        EditPropsComponent,
        EditorComponent
    ],
    exports: [
        EditorComponent,
    ]
})
export class EditorModule { }