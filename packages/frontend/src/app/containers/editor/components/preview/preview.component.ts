import { Component, ElementRef } from "@angular/core";
import {CarTuneRenderer} from '@cartune/renderer';

@Component({
    selector: "ct-preview",
    templateUrl: "./preview.component.html",
    styleUrls: ['./preview.component.scss']
}) 
export class PreviewComponent {
    private _renderer: CarTuneRenderer

    constructor(element: ElementRef) {
        this._renderer = new CarTuneRenderer(element.nativeElement, 'assets/models/gt86/gt86.json');
        this._renderer.init();
        this._renderer.start();

        window['cliControls'] = this._renderer.cliControls;
    }
}