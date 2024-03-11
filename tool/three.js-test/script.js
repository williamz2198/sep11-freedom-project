import * as THREE from 'three';

//Create two boxes

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const geometry2 = new THREE.BoxGeometry( 2, 1, 1 );
// const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// const rectangle = new THREE.Mesh( geometry2, material2 );
// scene.add( rectangle );

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
//         cube.rotation.x -= 0.02;
//         cube.rotation.y += 0.00;
//         rectangle.rotation.x += 0.00;
//         rectangle.rotation.y += 0.02;
// 	renderer.render( scene, camera );
// }
// animate();



// Create two lines

// const renderer = new THREE.WebGLRendrer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } );
// const points = [];
// points.push( new THREE.Vector3( -10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );
// const line = new THREE.Line( geometry, material );
// scene.add( line );
// renderer.render( scene, camera );

// render scene



// Create a character

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
// camera.position.z = 6;

// const lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
// scene.add(lightDirectional)
// lightDirectional.position.x = 5
// lightDirectional.position.y = 5
// lightDirectional.position.z = 5

// const square = new THREE.BoxGeometry( 1, 1, 1 );
// const white = new THREE.MeshBasicMaterial( { color: 0xFFFFFF} );
// const whiteCube = new THREE.Mesh( square, white );
// whiteCube.position.set( 0, 1.25, 0 );

// const rectangle = new THREE.BoxGeometry( 1.5, 2, 1 );
// const red = new THREE.MeshBasicMaterial( { color: 0xFF0000} );
// const redRectangle = new THREE.Mesh( rectangle, red );
// redRectangle.position.set( 0, -0.25, 0 );

// const armShape = new THREE.BoxGeometry ( 0.5, 1.5, 0.5);
// const arm1 = new THREE.Mesh ( armShape, white);
// arm1.position.set(-1, -0.25, 0)

// const arm2 = new THREE.Mesh ( armShape, white);
// arm2.position.set(1, -0.25, 0)

// const legShape = new THREE.BoxGeometry (0.5, 1.5, 0.75);
// const leg1 = new THREE.Mesh( legShape, white);
// leg1.position.set(-0.5, -2, 0);

// const leg2 = new THREE.Mesh( legShape, white);
// leg2.position.set(0.5, -2, 0);

// const modelGroup = new THREE.Group();
// modelGroup.add (whiteCube);
// modelGroup.add (redRectangle);
// modelGroup.add (arm1);
// modelGroup.add (arm2);
// modelGroup.add (leg1);
// modelGroup.add (leg2);

// scene.add (modelGroup);

// const degreesToRadians = (degrees) => {
// 	return degrees * (Math.PI / 180)
// }
// modelGroup.rotation.x = degreesToRadians(20)
// modelGroup.rotation.y = degreesToRadians(20)

// renderer.render( scene, camera );


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add( line );
// renderer.render( scene, camera );


	