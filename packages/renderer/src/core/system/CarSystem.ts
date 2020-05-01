import { Group, Mesh, MeshStandardMaterial, MeshPhongMaterial, CubeTexture, Object3D, MeshPhysicalMaterial } from "three";

import { ISystem } from "./ISystem";
import { CTJsonResponse } from '../utils';
import { BodyEntity, WheelsEntity, FBXEntity } from "../entities";
import { SerializedEntityType, SerializedEntity } from "../entities/SerializedEntity";

type TypeMapRecord = Record<string, Function>;
const TYPES_MAP: TypeMapRecord = {
    "BodyEntity": (entity: SerializedEntityType) => new BodyEntity(entity),
    "WheelsEntity": (entity: SerializedEntityType) => new WheelsEntity(entity)
}

export class CarSystem implements ISystem {
    private _entities: FBXEntity[] = [];
    private _renderObject: Group;

    // private _rideHeight: number = 0;

    async deserialize(fileName: string): Promise<void> {
        const data = <CTJsonResponse>await (await fetch(fileName)).json();

        this._entities = await Promise.all(data.entities.map(async (entity: SerializedEntityType) => {
            const fbxEntity: FBXEntity = TYPES_MAP[entity.type](entity);
            await fbxEntity.load(entity.fileName);
            return fbxEntity;
        }));

        this._renderObject = new Group();
        this._entities.forEach(entity => {
            this._renderObject.add(entity.renderObject);

            console.log('Entity', entity);
            entity.renderObject.children.forEach((child: Mesh) => {
                if (!Array.isArray(child.material)) {
                    child.material = new MeshPhysicalMaterial({
                        color: entity.color,
                        ...entity.material?.toMaterialProps(),
                        reflectivity: 0.5
                    });
                } else {
                    child.material = child.material.map((material: MeshPhongMaterial) => {
                        return new MeshPhysicalMaterial({
                            color: entity.color,
                            ...entity.material?.toMaterialProps(),
                            reflectivity: 0.5
                        });
                    })
                }
            })
        });
    }

    get entities(): FBXEntity[] {
        return this._entities;
    }

    get renderObject(): Group {
        return this._renderObject;
    }

    set rideHeight(value: number) {
        const bodyEntity = this.entities.find(entity => {
            return entity.type === "BodyEntity";
        });

        if (!bodyEntity) {
            return;
        }

        // this._rideHeight += value;
        bodyEntity.renderObject.translateY(value);
    }
}