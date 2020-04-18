import { Loader } from "three";

export interface IEntity {
    load(loader: Loader): void;
}