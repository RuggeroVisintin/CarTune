import { Group, Mesh, MeshPhysicalMaterial } from "three";

import { ISystem } from "./ISystem";
import { CTJsonResponse } from '../utils';
import { FBXEntity, createEntity } from "../entities";
import { SerializedEntityType } from "../entities/utils/SerializedEntityType";

export class CarSystem implements ISystem {
    private _entities: FBXEntity[] = [];
    private _renderObject: Group;

    // private _rideHeight: number = 0;

    async deserialize(fileName: string): Promise<void> {
        const data = <CTJsonResponse>await (await fetch(fileName)).json();

        this._entities = await Promise.all(data.entities.map(async (entity: SerializedEntityType) => {
            const fbxEntity: FBXEntity = createEntity(entity);
            await fbxEntity.load();
            return fbxEntity;
        }));

        this._renderObject = new Group();
        this._entities.forEach(entity => {
            this._renderObject.add(entity.renderObject);

            entity.renderObject.children.forEach((child: Mesh) => {
                if (!Array.isArray(child.material)) {
                    child.material = new MeshPhysicalMaterial({
                        ...entity.material?.toMaterialProps(),
                    });
                } else {
                    child.material = child.material.map(() => {
                        return new MeshPhysicalMaterial({
                            ...entity.material?.toMaterialProps(),
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