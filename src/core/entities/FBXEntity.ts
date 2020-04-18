import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import { Object3D } from "three";
import { IEntity } from "./IEntity";

export class FBXEntity implements IEntity {
    private _fileName: string;
    private _renderObject: Object3D;

    constructor(
        fileName: string
    ) {
        this._fileName = fileName;
    }

    async load(loader: FBXLoader): Promise<void> {
        return new Promise(resolve => {
            loader.load(this._fileName, fbxScene => {
                this._renderObject = fbxScene;
                resolve();
            });
        });
    }

    get renderObject(): Object3D {
        return this._renderObject;
    }
}