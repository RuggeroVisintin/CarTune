import {Group, Object3D} from 'three';

export interface IRenderableEntity {
    renderObject: Group | Object3D;
}