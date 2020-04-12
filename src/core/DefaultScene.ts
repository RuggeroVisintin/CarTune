import { Scene, BoxGeometry, MeshPhongMaterial, Mesh, CubeTextureLoader, DirectionalLight, Object3D, Vector3 } from "three";

export class DefaultScene {
    private _renderObject: Scene;

    constructor() {
        this._renderObject = new Scene();

        var geometry = new BoxGeometry();
		var material = new MeshPhongMaterial( { color: 0x00ff00 } );
        var cube = new Mesh( geometry, material );

        var directionalLight = new DirectionalLight( 0xffffff );
        directionalLight.position.set(-1, 1, 1);

        this._renderObject = new Scene();
        this._renderObject.add(cube);
        this._renderObject.add( directionalLight );


        this._renderObject.background = new CubeTextureLoader()
            .setPath('assets/img/default_cubemap/')
            .load([
                'posx.jpg',
                'negx.jpg',
                'posy.jpg',
                'negy.jpg',
                'posz.jpg',
                'negz.jpg'
            ]);
    }

    get renderObject(): Scene {
        return this._renderObject;
    }
}