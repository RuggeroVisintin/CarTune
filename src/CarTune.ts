import { WebGLRenderer, PerspectiveCamera } from 'three';

import {DefaultScene} from './core/DefaultScene';
import {CameraControls} from './core/CameraControls';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';

export class CarTune {
    private _initialized = false;

    private _renderer: WebGLRenderer;
    private _camera: PerspectiveCamera;
    private _scene: DefaultScene;
    private _cameraControls: CameraControls;

    constructor() {
        this._renderer = new WebGLRenderer();
        this._renderer.setSize(window.innerWidth, window.innerHeight);

        this._camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        this._camera.position.z = 5;

        this._cameraControls = new CameraControls(this._camera, this._renderer);
        this._scene = new DefaultScene();
        this._scene.init();
        
        window.onclick = this.onClick;
        document.body.appendChild(this._renderer.domElement);
    }

    init() {
        this._initialized = true;

        window.onresize = (event: any) => {
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            this._camera.aspect = window.innerWidth / window.innerHeight;
            this._camera.updateProjectionMatrix();
        } 
    }

    start() {
        if(!this._initialized) {
            throw new Error("Called start before init")
        }
        requestAnimationFrame(() => {this.start()});

        this._cameraControls.update();
        this._renderer.render(this._scene.renderObject, this._camera);
    }

    onClick() {

    }
}