import { CarScene } from "../CarScene";
import { ICommand } from "./ICommand";
import { MathUtils } from "three";

export class ChangeRideHeightCommand implements ICommand {
    private _delta: number;

    constructor(
        delta: number
    ) {
        this._delta = delta;
    }

    apply(scene: CarScene): void {
       scene.carSystem.rideHeight = this._delta;
    }
}