import { Scene, CubeTextureLoader, DirectionalLight, AmbientLight, PMREMGenerator } from "three";
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader';

import { CarSystem } from './system/CarSystem';

export class DefaultScene {
    private _renderObject: Scene;
    private _carSystem: CarSystem;

    constructor() {
        this._renderObject = new Scene();
    }

    async init(pmremGenerator: PMREMGenerator, modelPath: string): Promise<void> {
        new EXRLoader().load('assets/img/tiber_island_4k.exr', (texture => {
            const exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
            const exrBackground = exrCubeRenderTarget.texture;

            this._renderObject.environment = exrCubeRenderTarget.texture;
            this._renderObject.background = exrBackground;

            this._carSystem = new CarSystem();
            this._carSystem
                .deserialize(modelPath)
                .then(() => {
                    this._renderObject.add(this._carSystem.renderObject);
                });
        }));

      

        var directionalLight = new DirectionalLight(0xffffff);
        directionalLight.position.set(-1, 1, 1);
        directionalLight.intensity = 0.7;

        var ambientLight = new AmbientLight(0xffffff);
        ambientLight.intensity = .25;
    }

    get renderObject(): Scene {
        return this._renderObject;
    }

    get carSystem(): CarSystem {
        return this._carSystem;
    }
}