import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import { Object3D, Mesh, MeshPhysicalMaterial, MeshPhongMaterial, Material } from "three";

import { SerializedEntity} from './SerializedEntity';
import { IRenderableEntity } from './IRenderableEntity';

export class FBXEntity extends SerializedEntity implements IRenderableEntity  {
    private _renderObject: Object3D;

    async load(): Promise<void> {
        const loader = new FBXLoader();

        await new Promise(resolve => {
            loader.load(this.filename, fbxScene => {
                this._renderObject = fbxScene;

                this._renderObject.children.forEach((child: Mesh) => {
                    if (!Array.isArray(child.material)) {
                        child.material = this.mapMaterial(child.material);
                    } else {
                        child.material = this.mapMaterial(child.material);
                    }
                })
                
                resolve();
            });
        });
    }

    get renderObject(): Object3D {
        return this._renderObject;
    }

    private mapMaterial(material: Material | Material[]): MeshPhysicalMaterial | MeshPhysicalMaterial[] {
        if(Array.isArray(material)) {
            return material.map((matElement: MeshPhongMaterial) => {
                return new MeshPhysicalMaterial({
                    ...this.material?.toMaterialProps(),
                    color: matElement.color || this.material?.toMaterialProps().color
                });
            });
        } else {
            return new MeshPhysicalMaterial({
                ...this.material?.toMaterialProps(),
                color: (<MeshPhongMaterial>material).color || this.material?.toMaterialProps().color
            });
        }
    }
}