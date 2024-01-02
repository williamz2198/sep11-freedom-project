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
  light.castShadow = true
  scene.add(light)

  const controls = new OrbitControls(camera, renderer.domElement)

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
  }) {
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

  const cube = new Box({
    width: 1,
    height: 1,
    depth: 1,
    velocity: {
      x: 0,
      y:-0.02,
      z: 0
    },
    position: {
      x: 2,
      y: 1,
      x: 2
    }
  })

  const newcube = new Box({
    width: 1,
    height: 1,
    depth: 1,
    velocity: {
      x: 0,
      y:-0.02,
      z: 0
    }
  })

  newcube.castShowdow = true
  scene.add(newcube)
  cube.castShadow = true
  scene.add(cube)

  const ground = new Box({
    width: 100,
    height: 0.5,
    depth: 100,
    color: '#0000ff',
    position: {
      x: 0,
      y: -2,
      z: 0
    }
  })

  ground.receiveShadow = true
  scene.add(ground)

  const keys = {
    w: {
      pressed: false
    },
    a: {
      pressed: false
    },
    s: {
      pressed: false
    },
    d: {
      pressed: false
    },

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
      // case 'KeyD':
      //   break
      }
    }
  )

  const followCam = new THREE.Object3D();
  camera.lookAt(scene.position);

  followCam.position.copy(camera.position);
  scene.add(followCam);
  followCam.parent = cube;

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

    cube.velocity.x = 0
    cube.velocity.z = 0
    // if (keys.w.pressed) cube.velocity.z = -0.02
    // else if (keys.s.pressed) cube.velocity.z = 0.02
    // if (keys.a.pressed) cube.velocity.x = -0.02
    // else if (keys.d.pressed) cube.velocity.x = 0.02
    var directionOffset = 0
    if (keys.w.pressed) {
      if (keys.a.pressed) {
          directionOffset = Math.PI / 4 // w+a
      } else if (keys.d.pressed) {
          directionOffset = - Math.PI / 4 // w+d
      }
  } else if (keys.s.pressed) {
      if (keys.a.pressed) {
          directionOffset = Math.PI / 4 + Math.PI / 2 // s+a
      } else if (keys.d.pressed) {
          directionOffset = -Math.PI / 4 - Math.PI / 2 // s+d
      } else {
          directionOffset = Math.PI // s
      }
  } else if (keys.a.pressed) {
      directionOffset = Math.PI / 2 // a
  } else if (keys.d.pressed) {
      directionOffset = - Math.PI / 2 // d
  }

    cube.update(ground)
    newcube.update(ground)
  }
  animate()

