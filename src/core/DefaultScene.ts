import { Scene, CubeTextureLoader, DirectionalLight, AmbientLight } from "three";

import { BodyEntity, WheelsEntity } from './entities';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export class DefaultScene {
    private _renderObject: Scene;

    constructor() {
        this._renderObject = new Scene();
    }

    async init(): Promise<void> {
        const backgroundCube = new CubeTextureLoader()
            .setPath('assets/img/default_cubemap/')
            .load([
                'posx.jpg',
                'negx.jpg',
                'posy.jpg',
                'negy.jpg',
                'posz.jpg',
                'negz.jpg'
            ]);

        const bodyEntity = new BodyEntity('assets/models/prototipo/body.fbx');
        bodyEntity
            .load(new FBXLoader())
            .then(() => {
                this._renderObject.add(bodyEntity.renderObject);
            });

        const wheelsEntity = new WheelsEntity('assets/models/prototipo/wheels.fbx');
        wheelsEntity
            .load(new FBXLoader())
            .then(() => {
                this._renderObject.add(wheelsEntity.renderObject);
            })


        // this._loader.load('assets/models/bugatti/body.obj', (object) => {
        //     object.children = object.children.filter(child => {
        //         return child instanceof Mesh;
        //     }).map((child: Mesh) => {
        //         return child;
        //     });

        //     this._renderObject.add(object);
        // });

        var directionalLight = new DirectionalLight(0xffffff);
        directionalLight.position.set(-1, 1, 1);
        directionalLight.intensity = 0.7;

        var ambientLight = new AmbientLight(0xffffff);
        ambientLight.intensity = .25;

        this._renderObject.add(directionalLight);
        this._renderObject.add(ambientLight);

        this._renderObject.background = backgroundCube;
    }

    get renderObject(): Scene {
        return this._renderObject;
    }
}