import { IComponent } from "./IComponent";

export type PBRMaterialProps = {
    color?: string;
    roughness?: number;
    metalness?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
}

export class PBRMaterial implements IComponent {
    private _color: string;
    private _roughness: number;
    private _metalness: number;
    private _coatStrength: number;
    private _coatRoughness: number;

    constructor(props: PBRMaterialProps) {
        console.log('PROPS', props);

        this._roughness = props.roughness || 1;
        this._metalness = props.metalness || 0;
        this._coatStrength = props.clearcoat || 0;
        this._coatRoughness = props.clearcoatRoughness || 0;
        this._color = props.color || '#00000';
    }

    get roughness(): number {
        return this._roughness;
    }

    get metalness(): number {
        return this._metalness;
    }

    get coatStrength(): number {
        return this._coatStrength;
    }

    get coatRoughness(): number {
        return this._coatRoughness;
    }

    toMaterialProps() {
        return <PBRMaterialProps> {
            roughness: this._roughness,
            metalness: this._metalness,
            clearcoatRoughness: this._coatRoughness,
            clearcoat: this._coatStrength,
            color: this._color
        };
    }
}