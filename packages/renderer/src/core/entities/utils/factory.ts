import { SerializedEntityType } from "./SerializedEntityType";

export const EntityStore: any = {};

export function createEntity(props: SerializedEntityType) {
    return new EntityStore[props.type](props);
}