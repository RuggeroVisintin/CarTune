import {PBRMaterial, PBRMaterialProps} from '../components';

export type SerializedEntityType = {
    fileName: string;
    type: string;
    color: string;
    material: PBRMaterialProps;
}

export abstract class SerializedEntity {
    private _type: string;
    private _material: PBRMaterial;

    constructor(
        entity: SerializedEntityType
    ) {
        if(entity.material) {
            this._material = new PBRMaterial(entity.material);
        }
    }

    get type(): string {
        return this._type;
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