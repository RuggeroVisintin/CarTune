export type SerializedEntityType = {
    fileName: string;
    type: string;
}

export abstract class SerializedEntity {
    private _type: string;

    get type(): string {
        return this._type;
    }
}

export function SerializationType(typeName: string) {
    return function (constructor: Function) {
        constructor.prototype._type = typeName;
    }
}