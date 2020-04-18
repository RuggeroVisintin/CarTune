import { Scene, CubeTextureLoader, DirectionalLight, AmbientLight } from "three";

import { BodyEntity, WheelsEntity } from './entities';
import {CarSystem} from './system/CarSystem';

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

        const carSystem = new CarSystem();
        carSystem
            .deserialize('assets/models/defender/defender.json');

        const bodyEntity = new BodyEntity();
        bodyEntity
            .load('assets/models/defender/body.fbx')
            .then(() => {
                this._renderObject.add(bodyEntity.renderObject);
            });

        const wheelsEntity = new WheelsEntity();
        wheelsEntity
            .load('assets/models/defender/wheels.fbx')
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