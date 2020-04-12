import { WebGLRenderer, PerspectiveCamera, Scene, CubeTextureLoader, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import {OrbitControls} from 'three-orbitcontrols-ts';

export class CarTune {
    private _renderer: WebGLRenderer;
    private _camera: PerspectiveCamera;
    private _scene: Scene;
    private _controls: OrbitControls;

    constructor() {
        this._renderer = new WebGLRenderer();
        this._renderer.setSize(window.innerWidth, window.innerHeight);

        this._camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this._camera.position.z = 5;

        var geometry = new BoxGeometry;
		var material = new MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new Mesh( geometry, material );

        this._scene = new Scene();
        this._scene.add(cube);

        this._scene.background = new CubeTextureLoader()
            .setPath('assets/img/default_cubemap/')
            .load([
                'posx.jpg',
                'negx.jpg',
                'posy.jpg',
                'negy.jpg',
                'posz.jpg',
                'negz.jpg'
            ]);

        this._controls = new OrbitControls(this._camera, this._renderer.domElement);
        document.body.appendChild(this._renderer.domElement);
    }

    start() {
        requestAnimationFrame(() => {this.start()});

        this._controls.update();
        this._renderer.render(this._scene, this._camera);
    }
}