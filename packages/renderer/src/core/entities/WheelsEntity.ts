import { FBXEntity } from './FBXEntity';
import { SerializationType } from '../utils';
import { EntityStore } from './utils';

@SerializationType('WheelsEntity', WheelsEntity, EntityStore)
export class WheelsEntity extends FBXEntity {}