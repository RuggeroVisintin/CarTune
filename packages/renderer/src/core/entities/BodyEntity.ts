import { FBXEntity } from './FBXEntity';
import { SerializedEntityType } from "./utils/SerializedEntityType";
import { PBRMaterial } from '../components';
import { SerializationType } from '../utils';
import { EntityStore } from './utils';

/**
 * TODO: for later use
 */
// const PaintTypes = {
//     lacquer: new PBRMaterial({
//         clearcoat: 1,
//         metalness: 1
//     })
// }

@SerializationType("BodyEntity", BodyEntity, EntityStore)
export class BodyEntity extends FBXEntity {    
    constructor(
        entity: SerializedEntityType
    ) {
        super(entity);
    }
}