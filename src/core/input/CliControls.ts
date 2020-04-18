import {DefaultScene} from '../DefaultScene';
import { IControls } from './IControls';

export default class CliControls implements IControls {
    private _scene: DefaultScene;

    constructor(
        scene: DefaultScene
    ) {
        this._scene = scene;
    }

    increaseRideHeight(delta: number) {

    }

    decreaseRideHeight(delta: number) {

    }

    update() {

    }
}