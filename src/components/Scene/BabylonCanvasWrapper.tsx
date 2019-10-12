import React, {useRef} from 'react';
import * as BABYLON from 'babylonjs';

const createNewEngine = (canvas: HTMLCanvasElement, options: BABYLON.EngineOptions = {}, adaptToDeviceRatio: boolean = true) => {
  let engine = null;
  let scene = null;
  
  engine = new BABYLON.Engine(
    canvas,
    true,
    options,
    adaptToDeviceRatio,
  );

  if (engine) {
    scene = new BABYLON.Scene(engine);
  }

  return {
    engine,
    scene,
  }
}
  
type ICanvasWrapperProps = {
  width?: string,
  height?: string,
  options?: BABYLON.EngineOptions, 
  adaptToDeviceRatio?: boolean,
  onSceneMount?: (scene: BABYLON.Scene, engine: BABYLON.Engine, canvas: HTMLCanvasElement) => void,
  onSceneUnmount?: () => void
}
  
const BabylonCanvasWrapper: React.FC<ICanvasWrapperProps> = React.memo((props) => {
  const {
    width,
    height,
    options,
    adaptToDeviceRatio,
    onSceneMount,
    onSceneUnmount
  } = props;

  const resizeCallbackRef: React.MutableRefObject<(() => void) | null> = useRef(null);
  const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const setCanvasRef = (node: HTMLCanvasElement) => {
    canvasRef.current = node;

    if (node) {
      if (canvasRef.current) {
        const { scene, engine } = createNewEngine(canvasRef.current, options, adaptToDeviceRatio);
        if (!scene) {
          throw new Error('Failed to initialize scene! Unknown error!');
        }
        
        resizeCallbackRef.current = () => {
          engine.resize();
        };
        window.addEventListener('resize', resizeCallbackRef.current);

        if (onSceneMount) {
          onSceneMount(scene, engine, canvasRef.current);
        }
      }
      else {
        throw new Error('Unable to initialize scene since canvas is never mounted.');
      }
    }
    else {
      if (resizeCallbackRef.current) {
        window.removeEventListener('resize', resizeCallbackRef.current);
      }

      if (onSceneUnmount) {
        onSceneUnmount();
      }
    }
  }

  return (
    <div style={{width, height}}>
      <canvas style={{ width:'100%', height:'100%' }} ref={setCanvasRef}/>
    </div>
  );
}, 
(prevProps, nextProps) => {
  return true;
});

BabylonCanvasWrapper.defaultProps = {
  width: '100%',
  height: '100%',
}

export default BabylonCanvasWrapper;