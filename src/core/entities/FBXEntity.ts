import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import { Object3D } from "three";
import { IEntity } from "./IEntity";

export class FBXEntity implements IEntity {
    private _renderObject: Object3D;

    async load(fileName: string): Promise<void> {
        const loader = new FBXLoader();

        return new Promise(resolve => {
            loader.load(fileName, fbxScene => {
                this._renderObject = fbxScene;
                resolve();
            });
        });
    }

    get renderObject(): Object3D {
        return this._renderObject;
    }
}