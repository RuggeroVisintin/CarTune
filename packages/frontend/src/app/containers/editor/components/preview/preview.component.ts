import { Component, ElementRef } from "@angular/core";

@Component({
    selector: "ct-preview",
    templateUrl: "./preview.component.html"
}) 
export class PreviewComponent {
    constructor(element: ElementRef) {
        console.log('Element', element);
    }
}