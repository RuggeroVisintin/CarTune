import { FBXEntity } from './FBXEntity';
import { SerializationType, SerializedEntityType } from './SerializedEntity';
import { PBRMaterial } from '../components';

const PaintTypes = {
    lacquer: new PBRMaterial({
        roughness: 0.4,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.1
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