import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  )

  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer()
  renderer.shadowMap.enabled = true
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const light = new THREE.DirectionalLight( 0xffffff, 2 );
  light.position.x = 2;
  light.position.y = 4;
  light.position.z = 3;
  light.castShadow = true // the light will cast a shadow
  scene.add(light)

  function createScene() {
    requestAnimationFrame(createScene)
    renderer.render(scene, camera)
  }




  class Box extends THREE.Mesh {
    constructor({
       width,
       height,
       depth,
       color = '#00ff00',
       velocity = {
         x: 0,
         y: 0,
         z: 0
       },
       position = {
         x: 0,
         y: 0,
         z: 0
       }
   })}

  createScene();