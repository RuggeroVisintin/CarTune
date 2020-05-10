import {PBRMaterial} from '../components';
import { IEntity } from './IEntity';
import { SerializedEntityType } from './utils/SerializedEntityType';
import { createEntity } from './utils';

export abstract class SerializedEntity implements IEntity {
    private _type: string;
    private _name: string;
    private _material: PBRMaterial;
    private _fileName: string;
    protected _children: IEntity[] = [];

    constructor(
        entity: SerializedEntityType
    ) {
        this._type = entity.type;
        this._name = entity.name;

        if(entity.material) {
            this._material = new PBRMaterial(entity.material);
        }

        if(entity.fileName) {
            this._fileName = entity.fileName;
        }

        if(entity.children) {
            this._children = entity.children.map(child => {
                return createEntity(child);
            });
        }
    }

    abstract async load(): Promise<void>;

    get type(): string {
        return this._type;
    }

    get name(): string {
        return this._name;
    }

    get material(): PBRMaterial {
        return this._material;
    }

    get filename(): string {
        return this._fileName;
    }

    get children(): IEntity[] {
        return this._children;
    }
}