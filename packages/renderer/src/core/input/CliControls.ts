import {CarScene} from '../CarScene';
import { IControls } from './IControls';
import { ICommand, ChangeRideHeightCommand } from '../commands';
import { PBRMaterial } from '../components';

export class CliControls implements IControls {
    private _scene: CarScene;
    private _commands: ICommand[] = [];

    constructor(
        scene: CarScene
    ) {
        this._scene = scene;
    }

    increaseRideHeight(delta: number) {
        this._commands.push(new ChangeRideHeightCommand(+delta));
    }

    decreaseRideHeight(delta: number) {
        this._commands.push(new ChangeRideHeightCommand(-delta));
    }

    update() {
        this._commands.forEach(command => {
            command.apply(this._scene);
        });

        this._commands = [];
    }

    get scene(): CarScene {
        return this._scene;
    }
}