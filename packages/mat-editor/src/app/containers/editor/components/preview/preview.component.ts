import { Component, ElementRef, OnInit } from "@angular/core";
import {MatRenderer} from '@cartune/renderer';

@Component({
    selector: "preview",
    templateUrl: "./preview.component.html",
    styleUrls: ['./preview.component.scss']
}) 
export class PreviewComponent implements OnInit {
    private _renderer: MatRenderer

    constructor(
        private element: ElementRef
    ) {
    }

    ngOnInit() {
        this._renderer = new MatRenderer(this.element.nativeElement, 'assets/models/gt86/gt86.json');
        this._renderer.init();
        this._renderer.start();
    }
}