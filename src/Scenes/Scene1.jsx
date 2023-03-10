import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import '../Assets/Scene1.css';

export default function Scene1() {
  const mount = useRef(null);

  useEffect(() => {
    // create a Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);
    camera.position.set(0, 0, 10);

    // load the FBX model
    const loader = new FBXLoader();
    loader.load('../Assets/biniso20.fbx', function (object) {
      scene.add(object);
    });

    // animate the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <div ref={mount} />;
}
