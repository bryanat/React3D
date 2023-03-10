import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Canvas, useLoader } from '@react-three/fiber'

const Scene1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loader = new FBXLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    camera.position.set(0, 0, 5);

    loader.load('/home/bryanat/react3d/src/Assets/biniso20.fbx', (fbx) => {
      const group = new THREE.Group();
      group.add(fbx);
      scene.add(group);
    }, undefined, (error) => {
      console.error(error);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};

export default Scene1;
