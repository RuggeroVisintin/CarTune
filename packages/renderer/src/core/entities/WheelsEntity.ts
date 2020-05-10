import { FBXEntity } from './FBXEntity';
import { SerializationType } from '../utils';
import { EntityStore } from './utils';

@SerializationType('WheelsEntity', EntityStore)
export class WheelsEntity extends FBXEntity {}