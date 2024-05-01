import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  // renderer.setPixelRatio(window.devicePixelRatio);

  // Camera
  const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
  // const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  const controls = new OrbitControls(camera, renderer.domElement)
  camera.position.set(0, 10, 20)


  // Create the scene
  const scene  = new THREE.Scene();
  scene.background = new THREE.Color('lightblue')


  // Add lighting
  renderer.shadowMap.enabled = true
  const light = new THREE.DirectionalLight( 0xffffff, 2 );
  light.position.x = 2;
  light.position.y = 4;
  light.position.z = 3;
  light.castShadow = true
  scene.add(light)


  // Roads
  const roadShape = new THREE.BoxGeometry (10, 0.6, 100);
  const concrete = new THREE.MeshStandardMaterial( { color: 0x808076})
  const road = new THREE.Mesh( roadShape, concrete)
  road.recieveShadow = true;
  scene.add(road)

  const roadShape2 = new THREE.BoxGeometry (100, 0.6, 10);
  const road2 = new THREE.Mesh( roadShape2, concrete)
  road2.recieveShadow = true;
  scene.add(road2)

  const sidewalkRoad = new THREE.BoxGeometry (5, 0.7, 100);
  const concreteSidewalk = new THREE.MeshStandardMaterial( { color: 0x000000})
  const sidewalk = new THREE.Mesh( sidewalkRoad, concreteSidewalk)
  sidewalk.recieveShadow = true;
  scene.add(sidewalk)

  const sidewalkRoad2 = new THREE.BoxGeometry (100, 0.7, 5);
  const sidewalk2 = new THREE.Mesh( sidewalkRoad2, concreteSidewalk)
  sidewalk.recieveShadow = true;
  scene.add(sidewalk2)




  const wallshape = new THREE.BoxGeometry ( 10, 15, 1);
  const wallshape2 = new THREE.BoxGeometry(1, 15, 10);
  const windowShape = new THREE.BoxGeometry(3, 3, 1.5)
  const windowShape2 = new THREE.BoxGeometry(1.5, 3, 3)
  const Roof = new THREE.BoxGeometry(10, 1, 10)

  const wallmaterial = new THREE.MeshStandardMaterial({ color: 0xBC4A3C})
  const bluewall = new THREE.MeshStandardMaterial({color: 0x187BCD })
  const windowWhite = new THREE.MeshStandardMaterial({color: 0xFFFFFF})


  const Redwall = new THREE.Mesh(wallshape, wallmaterial);
  const Redwall2 = new THREE.Mesh(wallshape2, wallmaterial);
  const Redwall3 = new THREE.Mesh(wallshape, wallmaterial);
  const Redwall4 = new THREE.Mesh(wallshape2, wallmaterial);

  const windowRed = new THREE.Mesh(windowShape, windowWhite)
  const windowRed2 = new THREE.Mesh(windowShape2, windowWhite)
  const windowRed3 = new THREE.Mesh(windowShape, windowWhite)
  const windowRed4 = new THREE.Mesh(windowShape2, windowWhite)

  const redroof = new THREE.Mesh(Roof, wallmaterial)

  Redwall.position.set(0, 7.5, 5);
  Redwall2.position.set(5, 7.5, 0);
  Redwall3.position.set(0, 7.5, -5);
  Redwall4.position.set(-5, 7.5, 0);
  windowRed.position.set(0, 10, 5)
  windowRed2.position.set(5, 10, 0)
  windowRed3.position.set(0, 10, -5)
  windowRed4.position.set(-5, 10, 0)
  redroof.position.set(0, 15, 0)



  const Bluewall = new THREE.Mesh(wallshape, bluewall);
  const Bluewall2 = new THREE.Mesh(wallshape2, bluewall);
  const Bluewall3 = new THREE.Mesh(wallshape, bluewall);
  const Bluewall4 = new THREE.Mesh(wallshape2, bluewall);

  const windowblue = new THREE.Mesh(windowShape, windowWhite)
  const windowblue2 = new THREE.Mesh(windowShape2, windowWhite)
  const windowblue3 = new THREE.Mesh(windowShape, windowWhite)
  const windowblue4 = new THREE.Mesh(windowShape2, windowWhite)

  const blueroof = new THREE.Mesh(Roof, bluewall)

  Bluewall.position.set(0, 7.5, 5);
  Bluewall2.position.set(5, 7.5, 0);
  Bluewall3.position.set(0, 7.5, -5);
  Bluewall4.position.set(-5, 7.5, 0);
  windowblue.position.set(0, 10, 5)
  windowblue2.position.set(5, 10, 0)
  windowblue3.position.set(0, 10, -5)
  windowblue4.position.set(-5, 10, 0)
  blueroof.position.set(0, 15, 0)

// Putting the buildings to groups to position them easier

 const buildingGroup = new THREE.Group()
  buildingGroup.position.set(15, 0, 15)
  buildingGroup.receiveShadow = true;
    buildingGroup.add(Redwall)
    buildingGroup.add(Redwall2)
    buildingGroup.add(Redwall3)
    buildingGroup.add(Redwall4)
    buildingGroup.add(windowRed)
    buildingGroup.add(windowRed2)
    buildingGroup.add(windowRed3)
    buildingGroup.add(windowRed4)
    buildingGroup.add(redroof)
  scene.add(buildingGroup)

  const buildingGroup2 = new THREE.Group()
  buildingGroup2.position.set(-15, 0, -15)
  buildingGroup2.receiveShadow = true;
    buildingGroup2.add(Bluewall)
    buildingGroup2.add(Bluewall2)
    buildingGroup2.add(Bluewall3)
    buildingGroup2.add(Bluewall4)
    buildingGroup2.add(windowblue)
    buildingGroup2.add(windowblue2)
    buildingGroup2.add(windowblue3)
    buildingGroup2.add(windowblue4)
    buildingGroup2.add(blueroof)
  scene.add(buildingGroup2)

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

     update(group) {
       this.bottom = this.position.y - this.height / 2
       this.top = this.position.y + this.height / 2

       this.position.x += this.velocity.x
       this.position.z += this.velocity.z
       this.applyGravity()
     }

     applyGravity() {
       this.velocity.y += this.gravity
       // hit the ground
       if (this.bottom + this.velocity.y <= ground.top){
         this.velocity.y *= 0.7
         this.velocity.y = -this.velocity.y
       } else this.position.y += this.velocity.y
     }
   }

   const MC = new Box({
    width: 2,
    height: 2,
    depth: 2,
    velocity: {
      x: 0,
      y:-0.02,
      z: 0
    },
    position: {
      x: 0,
      y: 4,
      x: 0
    }
  })
  MC.castShadow = true
  scene.add(MC)

  const ground = new Box({
    width: 120,
    height: 0.5,
    depth: 120,
    color: '#3f9B0B',
    position: {
      x: 0,
      y: 0,
      z: 0
    }
  })
  ground.recieveShadow = true
  scene.add(ground)


// KeyActions
  const keys = {
    w: { pressed: false},
    a: {pressed: false},
    s: {pressed: false},
    d: {pressed: false},
  }

  window.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyW':
          keys.w.pressed = true
          break
        case 'KeyA':
          keys.a.pressed = true
          break
        case 'KeyS':
          keys.s.pressed = true
          break
        case 'KeyD':
          keys.d.pressed = true
          break
        // case 'KeyD':
        //   break
      }
    }
  )
  window.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'KeyW':
        keys.w.pressed = false
        break
      case 'KeyA':
        keys.a.pressed = false
        break
      case 'KeyS':
        keys.s.pressed = false
        break
      case 'KeyD':
        keys.d.pressed = false
        break
      }
    }
  )

  // Run everything to appear
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    MC.velocity.x = 0
    MC.velocity.z = 0
    if (keys.w.pressed) MC.velocity.z = -0.04
    else if (keys.s.pressed) MC.velocity.z = 0.04
    if (keys.a.pressed) MC.velocity.x = -0.04
    else if (keys.d.pressed) MC.velocity.x = 0.04
    MC.update(ground)
  }
  animate()