import { FBXEntity } from './FBXEntity';
import { SerializationType, SerializedEntityType } from './SerializedEntity';
import { PBRMaterial } from '../components';

const PaintTypes = {
    lacquer: new PBRMaterial({
        clearcoat: 1,
        metalness: 1
    })
}

@SerializationType("BodyEntity")
export class BodyEntity extends FBXEntity {    
    constructor(
        entity: SerializedEntityType
    ) {
        super(entity, PaintTypes.lacquer);
    }
}