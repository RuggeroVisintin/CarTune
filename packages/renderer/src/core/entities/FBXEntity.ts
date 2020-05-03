import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import { Object3D } from "three";

import { SerializedEntity} from './SerializedEntity';

export class FBXEntity extends SerializedEntity  {
    private _renderObject: Object3D;

    async load(): Promise<void> {
        const loader = new FBXLoader();

        return new Promise(resolve => {
            // TODO: map materials
            loader.load(this.filename, fbxScene => {
                this._renderObject = fbxScene;
                resolve();
            });
        });
    }

    get renderObject(): Object3D {
        return this._renderObject;
    }
}