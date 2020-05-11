import { Scene, PMREMGenerator, SphereGeometry, Mesh, MeshPhysicalMaterial } from "three";
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader';

import { IScene } from "./IScene";

export class SimpleScene implements IScene {
    private _renderObject: Scene;

    constructor() {
        this._renderObject = new Scene();
    }

    async init(pmremGenerator: PMREMGenerator): Promise<void> {
        new EXRLoader().load('assets/img/tiber_island_4k.exr', (texture => {
            const exrCubeRenderTarget = pmremGenerator.fromEquirectangular(texture);
            const exrBackground = exrCubeRenderTarget.texture;

            this._renderObject.environment = exrCubeRenderTarget.texture;
            this._renderObject.background = exrBackground;

            const sphereGeo = new SphereGeometry(50, 8 * 4, 6 * 4);
            const sphereMesh = new Mesh(sphereGeo, new MeshPhysicalMaterial({}));

            this._renderObject.add(sphereMesh);
        }));
    }

    get renderObject(): Scene {
        return this._renderObject;
    }
}