import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function MyScene() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const scene = new THREE.Scene();

    const loader = new FBXLoader();
    loader.load('biniso20.fbx', (model) => {
      // adjust model position, rotation, and scale
      model.position.set(0, 0, 0);
      model.rotation.set(0, Math.PI, 0);
      model.scale.set(0.5, 0.5, 0.5);

      // add model to the scene
      scene.add(model);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      // rotate model around its Y-axis
      if (scene.children[0]) {
        scene.children[0].rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}

export default MyScene