export function SerializationType(typeName: string, type: Function, store: any) {
    return function (constructor: Function) {
        constructor.prototype._type = typeName;
        store[typeName] = type;
    }
}