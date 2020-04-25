import { DefaultScene } from "../DefaultScene";
import { ICommand } from "./ICommand";
import { MathUtils } from "three";

export class ChangeRideHeightCommand implements ICommand {
    private _delta: number;

    constructor(
        delta: number
    ) {
        this._delta = delta;
    }

    apply(scene: DefaultScene): void {
       scene.carSystem.rideHeight = this._delta;
    }
}