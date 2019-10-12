import React, { ReactElement, useRef } from 'react';
import BabylonCanvasWrapper from '../components/Scene/BabylonCanvasWrapper';
import { createCSS } from '../utils/CreateCSS';
import * as BABYLON from 'babylonjs';
import SceneManager from '../engine';

const classNames = createCSS({
  homeRoot: {
    width: '100vw',
    height: '100vh',
  }
});

type HomeProps = {

}

export const Home: React.FC = (props : HomeProps) : ReactElement => {
  
  const sceneManagerRef = useRef(new SceneManager()); 
  
  const onSceneMount = (scene: BABYLON.Scene, engine: BABYLON.Engine, canvas: HTMLCanvasElement) => {
    sceneManagerRef.current.initialize(scene, engine, canvas);
  }
  
  const onSceneUnmount = () => {
    sceneManagerRef.current.dispose();
  }

  return (
    <div className={classNames.homeRoot}>
      <BabylonCanvasWrapper
        onSceneMount={onSceneMount}
        onSceneUnmount={onSceneUnmount}
      />
    </div>
  );
}

export default Home;