import { WebGLRenderer, PerspectiveCamera } from 'three';
import {OrbitControls} from 'three-orbitcontrols-ts';

import {DefaultScene} from './core/DefaultScene';

export class CarTune {
    private _renderer: WebGLRenderer;
    private _camera: PerspectiveCamera;
    private _scene: DefaultScene;
    private _controls: OrbitControls;

    constructor() {
        this._renderer = new WebGLRenderer();
        this._renderer.setSize(window.innerWidth, window.innerHeight);

        this._camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this._camera.position.z = 5;

        this._scene = new DefaultScene();

        this._controls = new OrbitControls(this._camera, this._renderer.domElement);
        document.body.appendChild(this._renderer.domElement);
    }

    start() {
        requestAnimationFrame(() => {this.start()});

        this._controls.update();
        this._renderer.render(this._scene.renderObject, this._camera);
    }
}