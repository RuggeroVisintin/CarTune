import { DefaultScene } from "../DefaultScene";

export class ChangeRideHeightCommand {
    private _delta: number;
    
    apply(scene: DefaultScene): void {
        const bodyEntity = scene.carSystem.entities.find(entity =>{
            return entity.type === 'MeshEntity';
        });

        bodyEntity.renderObject.translateY(this._delta);
    }
}