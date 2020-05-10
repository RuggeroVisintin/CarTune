export function SerializationType(typeName: string, store: any) {
    return function (constructor: Function) {
        constructor.prototype._type = typeName;
        store[typeName] = constructor;
    }
}