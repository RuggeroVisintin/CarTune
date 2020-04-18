export type SerializedEntity = {
    fileName: string;
    type: string;
}

export function SerializationType(typeName: string) {
    return function (constructor: Function) {
        constructor.prototype.type = typeName;
    }
}