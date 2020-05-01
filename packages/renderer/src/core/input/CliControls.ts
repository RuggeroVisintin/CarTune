import {DefaultScene} from '../DefaultScene';
import { IControls } from './IControls';
import { ICommand, ChangeRideHeightCommand } from '../commands';
import { PBRMaterial } from '../components';

export class CliControls implements IControls {
    private _scene: DefaultScene;
    private _commands: ICommand[] = [];

    constructor(
        scene: DefaultScene
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

    get scene(): DefaultScene {
        return this._scene;
    }
}