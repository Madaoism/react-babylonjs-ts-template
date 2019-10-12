import * as BABYLON from 'babylonjs'

export default class SceneManager {

  camera?: BABYLON.Camera | null;
  scene?: BABYLON.Scene | null;
  engine?: BABYLON.Engine | null;
  canvas?:  HTMLCanvasElement | null;
  lights: Array<BABYLON.Light>;
  _mainRenderLoop?: (() => void) | null;

  constructor() {
    this.lights = [];
  }

  initialize(scene: BABYLON.Scene, engine: BABYLON.Engine, canvas: HTMLCanvasElement) {
    this.scene = scene;
    this.engine = engine;
    this.canvas = canvas;

    this.scene.clearColor = new BABYLON.Color4(0.8, 0.8, 0.8, 1.0);
    this.scene.useRightHandedSystem = false;

    this.setupScene();

    this._mainRenderLoop = () => {
      try {
        this.update()
      }
      catch (e) {
        console.error('Failed to update render update loop!')
        throw e;
      }

      try {
        scene.render();
      }
      catch(e) {
        console.error('Failed to render scene!');
        throw e;
      }
    }
    engine.runRenderLoop(this._mainRenderLoop);
  }

  setupScene() {
    if (!this.scene) return;
    if (!this.canvas) return;

    this.camera = new BABYLON.UniversalCamera('defaultCamera', new BABYLON.Vector3(0, 1, -5), this.scene);
    this.camera.attachControl(this.canvas);

    let light = new BABYLON.HemisphericLight('defaultLight', new BABYLON.Vector3(1, 0.5, 0.75), this.scene);
    light.intensity = 0.75;
    this.lights.push(light);

    let boxA = BABYLON.MeshBuilder.CreateBox('box', {
      size: 1,
    }, this.scene);
    boxA.position.set(1, 0, 0);
    
    let sphereA = BABYLON.MeshBuilder.CreateSphere('box', {
      diameter: 1,
      segments: 64,
    }, this.scene);
    sphereA.position.set(-1, 0, 0);
  }

  dispose() {

    if (this.scene) {
      this.scene.dispose();
      this.scene = null;
    }

    if (this.engine) {
      this.engine.stopRenderLoop();
      this._mainRenderLoop = null;
      this.engine.dispose();
      this.engine = null;
    }

    this.camera = null;
    this.lights = [];
  }

  update() {

  }
}