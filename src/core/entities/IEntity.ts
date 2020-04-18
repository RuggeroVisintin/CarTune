import { Object3D } from "three";

export interface IEntity {
    load(fileName: string): Promise<void>;
}
