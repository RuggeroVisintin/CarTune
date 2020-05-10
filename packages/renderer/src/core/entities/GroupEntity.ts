import {SerializedEntity} from './SerializedEntity';
import {SerializationType} from '../utils';
import { EntityStore } from './utils';
import { Group } from 'three';
import { FBXEntity } from './FBXEntity';
import { IRenderableEntity } from './IRenderableEntity';

@SerializationType('GroupEntity', EntityStore)
export class GroupEntity extends SerializedEntity implements IRenderableEntity {
    private _renderObject = new Group();

    async load(): Promise<void> {
        await Promise.all(this._children.map(async (child) => {
            await child.load();
            if(child instanceof FBXEntity) {
                this._renderObject.add((<FBXEntity>child).renderObject);
            }
        }));
    }
    
    get renderObject(): Group {
        return this._renderObject;
    }

    isRenderable(): boolean {
        return true;
    }
}