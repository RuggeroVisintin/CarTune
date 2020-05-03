import { WebGLRenderer, PerspectiveCamera, PMREMGenerator } from 'three';
import {DefaultScene} from './core/DefaultScene';
import {CameraControls, CliControls} from './core/input';

export class CarTuneRenderer {
    private _initialized = false;
    private _clientElement: Element;
    private _modelPath: string;

    private _renderer: WebGLRenderer;
    private _camera: PerspectiveCamera;
    private _scene: DefaultScene;

    private _cliControls: CliControls;
    private _cameraControls: CameraControls;

    private _pmremGenerator: PMREMGenerator;

    constructor(element: Element, modelPath: string) {
        this._modelPath = modelPath;
        this._clientElement = element;
        const boundingRect = this._clientElement.getBoundingClientRect();

        this._renderer = new WebGLRenderer({
            antialias: true
        });
        this._renderer.setSize(boundingRect.width, boundingRect.height);

        this._pmremGenerator = new PMREMGenerator(this._renderer);

        this._camera = new PerspectiveCamera(75, boundingRect.width / boundingRect.height, 0.1, 10000);
        this._camera.position.z = 5;
        this._cameraControls = new CameraControls(this._camera, this._renderer);

       element.appendChild(this._renderer.domElement);
    }

    init() {
        this._initialized = true;

        window.onresize = (event: any) => {
            const boundingRect = this._clientElement.getBoundingClientRect();

            this._renderer.setSize( boundingRect.width,  boundingRect.height);
            this._camera.aspect =  boundingRect.width /  boundingRect.height;
            this._camera.updateProjectionMatrix();
        } 

        this._scene = new DefaultScene();
        this._scene.init(this._pmremGenerator, this._modelPath);
        this._pmremGenerator.compileEquirectangularShader();

        this._cliControls = new CliControls(this._scene);
    }

    start() {
        if(!this._initialized) {
            throw new Error("Called start before init")
        }

        requestAnimationFrame(() => {this.start()});

        this._cameraControls.update();
        this._cliControls.update();
        this._renderer.render(this._scene.renderObject, this._camera);
    }

    get cliControls(): CliControls {
        return this._cliControls;
    }
}