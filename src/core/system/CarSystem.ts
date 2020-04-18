import { Group } from "three";

import { ISystem } from "./ISystem";
import {CTJsonResponse} from '../utils';
import { BodyEntity, WheelsEntity, IEntity, FBXEntity } from "../entities";
import { SerializedEntity } from "../entities/SerializedEntity";

type TypeMapRecord = Record<string, Function>;
const TYPES_MAP: TypeMapRecord = {
    "BodyEntity": () => new BodyEntity(),
    "WheelsEntity": () => new WheelsEntity()
}

export class CarSystem implements ISystem {
    private _entities: FBXEntity[];
    private _renderObject: Group;

    async deserialize(fileName: string): Promise<void> {
        const data = <CTJsonResponse>await (await fetch(fileName)).json();

        this._entities = await Promise.all(data.entities.map(async (entity: SerializedEntity) => {
            const fbxEntity: FBXEntity = TYPES_MAP[entity.type]();
            await fbxEntity.load(entity.fileName);

            return fbxEntity;
        }));

        this._renderObject = new Group();
        this._entities.forEach(entity => {
            this._renderObject.add(entity.renderObject);
        });
    }

    get entities(): FBXEntity[] {
        return this._entities;
    }

    get renderObject(): Group {
        return this._renderObject;
    }
}