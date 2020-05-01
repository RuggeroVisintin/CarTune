import { IComponent } from "./IComponent";

type PBRMaterialProps = {
    roughness?: number;
    metalness?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
}

export class PBRMaterial implements IComponent {
    private _roughness: number;
    private _metalness: number;
    private _coatStrenght: number;
    private _coatRoughness: number;

    constructor(props: PBRMaterialProps) {
        this._roughness = props.roughness || 1;
        this._metalness = props.metalness || 0;
        this._coatStrenght = props.clearcoat || 0;
        this._coatRoughness = props.clearcoatRoughness || 0;
    }

    get roughness(): number {
        return this._roughness;
    }

    get metalness(): number {
        return this._metalness;
    }

    get coatStrength(): number {
        return this._coatStrenght;
    }

    get coatRoughness(): number {
        return this._coatRoughness;
    }

    toMaterialProps() {
        return <PBRMaterialProps> {
            roughness: this._roughness,
            metalness: this._metalness,
            clearcoatRoughness: this._coatRoughness,
            clearcoat: this.coatStrength
        };
    }
}