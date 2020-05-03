import { PBRMaterialProps } from '../../components';
export type SerializedEntityType = {
    type: string;
    name: string;
    children?: SerializedEntityType[];
    color?: string;
    material?: PBRMaterialProps;
    fileName?: string;
};
