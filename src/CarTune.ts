import { WebGLRenderer, PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export class CarTune {
    private _renderer: WebGLRenderer;
    private _camera: PerspectiveCamera;
    private _scene: Scene;

    constructor() {
        this._renderer = new WebGLRenderer();
        this._renderer.setSize(window.innerWidth, window.innerHeight);

        this._camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this._camera.position.z = 5;

        this._scene = new Scene();
        var geometry = new BoxGeometry;
		var material = new MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new Mesh( geometry, material );
        
        this._scene.add(cube);

        document.body.appendChild(this._renderer.domElement);
    }

    start() {
        requestAnimationFrame(() => {this.start()});

        this._renderer.render(this._scene, this._camera);
    }
}