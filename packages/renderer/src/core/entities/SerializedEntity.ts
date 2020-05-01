import {PBRMaterial} from '../components';

export type SerializedEntityType = {
    fileName: string;
    type: string;
    color: string;
}

export abstract class SerializedEntity {
    private _type: string;
    private _color: string = 'pink';
    private _material: PBRMaterial;

    constructor(
        entity: SerializedEntityType,
        material?: PBRMaterial
    ) {
        if(entity.color) {
            this._color = entity.color;
        }

        if(material) {
            this._material = material;
        }
    }

    get type(): string {
        return this._type;
    }

    get color(): string {
        return this._color;
    }

    get material(): PBRMaterial {
        return this._material;
    }
}

export function SerializationType(typeName: string) {
    return function (constructor: Function) {
        constructor.prototype._type = typeName;
    }
}