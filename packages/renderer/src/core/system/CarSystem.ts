import { Group, Mesh, MeshPhysicalMaterial } from "three";

import { ISystem } from "./ISystem";
import { CTJsonResponse } from '../utils';
import { FBXEntity, createEntity, IEntity, IRenderableEntity } from "../entities";
import { SerializedEntityType } from "../entities/utils/SerializedEntityType";
import { SerializedEntity } from "../entities/SerializedEntity";

export class CarSystem implements ISystem {
    private _entities: IRenderableEntity[] = [];
    private _renderObject: Group;

    // private _rideHeight: number = 0;

    async deserialize(fileName: string): Promise<void> {
        const data = <CTJsonResponse>await (await fetch(fileName)).json();

        this._entities = await Promise.all(data.entities.map(async (entity: SerializedEntityType) => {
            const renderable: IRenderableEntity = createEntity(entity);

            if(renderable instanceof SerializedEntity) {
                await renderable.load();
            }

            return renderable;
        }));

        this._renderObject = new Group();
        this._entities.forEach(entity => {
            this._renderObject.add(entity.renderObject);

           
        });
    }

    get entities(): IRenderableEntity[] {
        return this._entities;
    }

    get renderObject(): Group {
        return this._renderObject;
    }

    set rideHeight(value: number) {
        // const bodyEntity = this.entities.find(entity => {
        //     return entity.type === "BodyEntity";
        // });

        // if (!bodyEntity) {
        //     return;
        // }

        // // this._rideHeight += value;
        // bodyEntity.renderObject.translateY(value);
    }
}