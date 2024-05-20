import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // renderer.setPixelRatio(window.devicePixelRatio);

  // Camera
  const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
  const controls = new PointerLockControls( camera, renderer.domElement )

  renderer.domElement.addEventListener( 'click', function() {
    controls.lock();
  })
  camera.position.set(0, 0, 0)

  // Create the scene

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('lightblue')

  // Add lighting
  renderer.shadowMap.enabled = true
  const light = new THREE.DirectionalLight( 0xffffff, 2 );
  const lightlight = new THREE.AmbientLight( 0xffff00, 0.04)
  light.position.x = 2;
  light.position.y = 4;
  light.position.z = 3;
  light.castShadow = true
  scene.add(light)
  scene.add(lightlight)


  class Box extends THREE.Mesh {
    constructor({width, height, depth, color = '#00ff00',
    velocity = { x: 0, y: 0, z: 0},
    position = { x: 0, y: 0, z: 0}})

    {
      super(
       new THREE.BoxGeometry(width, height, depth),
       new THREE.MeshStandardMaterial({ color })
       )
       this.height = height
       this.width = width
       this.depth = depth

       this.position.set(position.x, position.y, position.z)
       this.bottom = this.position.y - this.height / 2
       this.top = this.position.y + this.height / 2

       this.velocity = velocity
       this.gravity = -0.005
     }
   }

  // Roads

  for(var i = -3; i < 3; i ++){
    const roadShape = new THREE.BoxGeometry (55, 0.6, 1000);
    const concrete = new THREE.MeshStandardMaterial( { color: 0x808076})
    const road = new THREE.Mesh( roadShape, concrete)
    road.recieveShadow = true;
    road.position.set(i*200, 0, 0)
    scene.add(road)

    const roadShape2 = new THREE.BoxGeometry (1000, 0.6, 55);
    const road2 = new THREE.Mesh( roadShape2, concrete)
    road2.recieveShadow = true;
    road2.position.set(0, 0, i*200)
    scene.add(road2)

    const sidewalkRoad = new THREE.BoxGeometry (30, 0.7, 1000);
    const concreteSidewalk = new THREE.MeshStandardMaterial( { color: 0x000000})
    const sidewalk = new THREE.Mesh( sidewalkRoad, concreteSidewalk)
    sidewalk.recieveShadow = true;
    sidewalk.position.set(i*-200, 0, 0)
    scene.add(sidewalk)

    const sidewalkRoad2 = new THREE.BoxGeometry (1000, 0.7, 30);
    const sidewalk2 = new THREE.Mesh( sidewalkRoad2, concreteSidewalk)
    sidewalk.recieveShadow = true;
    sidewalk2.position.set(0, 0, i*200)
    scene.add(sidewalk2)
  }

  // buildings
  const objects = []

  for(var i = -6; i < 6; i ++){
    for(var d = -6; d < 6; d ++){
      var color1 = Math.floor(Math.random() * 255)
      var color2 = Math.floor(Math.random() * 255)
      var color3 = Math.floor(Math.random() * 255)

      const building = new Box({
        width: 50,
        height: 60,
        depth: 50,
        color: "rgb(color1, color2, color3)",
        position: {
          x: 50 + 100*i,
          y: 0,
          z: 50 + 100*d
        }
      })

      // const building2 = new Box({
      //   width: 50,
      //   height: 50,
      //   depth: 50,
      //   color: "rgb(color1, color2, color3)",
      //   position: {
      //     x: 50,
      //     y: 0,
      //     z: 50 + 100*i
      //   }
      // })

      building.recieveShadow = true
      scene.add(building)
      objects.push(building)
      // scene.add(building2)
    }
  }

  for(var i = 0; i < 2000; i++){
    const cloudSize = Math.random() * 10 + 5
    const cloudGeo = new THREE.OctahedronGeometry(cloudSize, 1)
    const cloudMat = new THREE.MeshStandardMaterial({color: 0xffffff})
    const cloud = new THREE.Mesh(cloudGeo, cloudMat)
    const x = Math.random() * 1200 - 600
    const y = Math.random() * 200 + 45
    const z = Math.random() * 1200 - 600
    cloud.position.set(x, y, z)
    scene.add(cloud)
    objects.push(cloud)
  }

  // bushes

  // for(var i = 0; i < 500; i++){
  //   const bushSize = Math.random() * 10 + 4
  //   const bushGeo = new THREE.OctahedronGeometry(bushSize, 1)
  //   const bushMat = new THREE.MeshStandardMaterial({color: 0x008000})
  //   const bush = new THREE.Mesh(bushGeo, bushMat)
  //   const x = Math.random() * 1200 - 600
  //   const z = Math.random() * 1200 - 600
  //   bush.position.set(x, 1, z)
  //   scene.add(bush)
  //   objects.push(bush)
  // }



  const ground = new Box({
    width: 1200,
    height: 0.5,
    depth: 1200,
    color: '#3f9B0B',
    position: {
      x: 0,
      y: 0,
      z: 0
    }
  })
  ground.recieveShadow = true
  scene.add(ground)

console.log(objects)
  // objects.push(buildingGroup)
  // objects.push(buildingGroup2)
  objects.push(ground)

// KeyActions
  let raycaster;


  let moveForward = false
  let moveBackward = false
  let moveLeft = false
  let moveRight = false
  let isJumping = false
  let canJump = false

  let prevTime = performance.now()
  const velocity = new THREE.Vector3();
  const direction = new THREE.Vector3()
  var speed = 5
  var movespeed = 100
  const mass = 80
  const gravity = 5
  const jumpSpeed = 100

  document.addEventListener( 'keyup', onKeyUp);
  document.addEventListener( 'keydown', onKeyDown);

  raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, -0.9 , 0 ), 0, 10 );

  function onKeyDown(event) {
    const code = event.code;
    if (code ===  'KeyA' || code === 'ArrowLeft') {
      moveLeft = true;
    }
    if (code ===  'KeyW' || code === 'ArrowUp') {
      moveForward = true;
    }
    if (code ===  'KeyS' || code === 'ArrowDown') {
      moveBackward = true;
    }
    if (code ===  'KeyD' || code === 'ArrowRight') {
      moveRight = true;
    }
    if (event.keyCode === 16){
      speed = 10;
      movespeed = 500;
    }
    if (code === 'Space') {
      isJumping = true;
    }
  }

  function onKeyUp(event) {
    const code = event.code;
    if (code ===  'KeyA' || code === 'ArrowLeft') {
      moveLeft = false;
    }
    if (code ===  'KeyW' || code === 'ArrowUp') {
      moveForward = false;
    }
    if (code ===  'KeyS' || code === 'ArrowDown') {
      moveBackward = false;
    }
    if (code ===  'KeyD' || code === 'ArrowRight') {
      moveRight = false;
    }
    if (event.keyCode === 16){
      speed = 5;
      movespeed = 100;
    }
    if (code === 'Space') {
      isJumping = false;
    }
  }

  function movementUpdate() {
    const time = performance.now()
    const delta = (time - prevTime) / 1000

    raycaster.ray.origin.copy( controls.getObject().position ); // get the player position
	  raycaster.ray.origin.y -= 10; // move down 10 units

    const intersections = raycaster.intersectObjects( objects, true );
    const onObject = intersections.length > 0;

    velocity.x -= velocity.x * speed * delta
    velocity.z -= velocity.z * speed * delta

    velocity.y -= mass * gravity * delta; // gravity

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft)
    direction.normalize();

    if (moveForward || moveBackward ) velocity.z -= direction.z * movespeed * delta;
    if (moveLeft || moveRight ) velocity.x -= direction.x * movespeed * delta;
    if (isJumping){
    if (canJump === true ) velocity.y += jumpSpeed
      canJump = false
      isJumping = false
    }

    if (onObject) {
      velocity.y = Math.max( 0, velocity.y );
      canJump = true;
    }

    controls.getObject().position.y += ( velocity.y * delta ); // new behavior

    controls.moveRight( - velocity.x * delta);
    controls.moveForward( - velocity.z * delta);

    if ( controls.getObject().position.y < 10 ) {
      velocity.y = 0;
      controls.getObject().position.y = 10;
      canJump = true;
    }

    prevTime = time
  }

  // Run everything to appear
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    if ( controls.isLocked === true) {
      movementUpdate();
    }
  }
  animate()