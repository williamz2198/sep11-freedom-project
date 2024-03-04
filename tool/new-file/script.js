import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // renderer.setPixelRatio(window.devicePixelRatio);

  // Camera
  const fov = 90;
  const aspect = 1920 / 1080;
  const near = 0.1;
  const far = 1000.0;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  const controls = new OrbitControls(camera, renderer.domElement)
  // camera.position.set(75, 20, 0)
  camera.position.z = 5;
  camera.position.y = 10

  // Create the scene
  const scene  = new THREE.Scene();

  // Add lighting
  var light = new THREE.DirectionalLight(0x000000);
  light.position.set(100, 100, 100);
  light.target.position.set(0, 0, 0);
  light.castShadow = true;
  scene.add(light);


  const plane = new THREE.BoxGeometry( 100, 1, 100 );
  const grass = new THREE.MeshBasicMaterial( { color: 0x3f9B0B } );
  const ground = new THREE.Mesh( plane, grass );
  ground.recieveShadow = true;
  scene.add(ground);

  const roadShape = new THREE.BoxGeometry (10, 1.5, 100);
  const concrete = new THREE.MeshBasicMaterial( { color: 0x808076})
  const road = new THREE.Mesh( roadShape, concrete)
  road.recieveShadow = true;
  scene.add(road)

  const roadShape2 = new THREE.BoxGeometry (100, 1.5, 10);
  const road2 = new THREE.Mesh( roadShape2, concrete)
  road2.recieveShadow = true;
  scene.add(road2)

  const sidewalkRoad = new THREE.BoxGeometry (2, 2, 100);
  const concreteSidewalk = new THREE.MeshBasicMaterial( { color: 0x000000})
  const sidewalk = new THREE.Mesh( sidewalkRoad, concreteSidewalk)
  sidewalk.recieveShadow = true;
  scene.add(sidewalk)

  // const plane = new THREE.Mesh(
  //   new THREE.PlaneGeometry(100, 100, 1, 1),
  //   new THREE.MeshStandardMaterial({color: 0x000000}))
  //   plane.recieveShadow = true;
  //   plane.rotation.x = Math.PI / 2;

  // scene.add(plane)

  // Run everything to appear
  function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  }
  animate()