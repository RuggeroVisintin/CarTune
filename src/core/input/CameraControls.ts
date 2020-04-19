import { Camera, WebGLRenderer } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import {IControls} from './IControls';

export class CameraControls implements IControls{
    private _controls: OrbitControls;

    constructor(
        camera: Camera,
        renderer: WebGLRenderer
    ) {
        this._controls = new OrbitControls(camera, renderer.domElement);
        this._controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this._controls.dampingFactor = 0.05;
        this._controls.screenSpacePanning = true;
        this._controls.minDistance = 1;
        this._controls.maxDistance = 10000;
        this._controls.maxPolarAngle = Math.PI / 2;
    }

    update() {
        this._controls.update();
    }
}