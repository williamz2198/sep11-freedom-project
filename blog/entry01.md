# Entry 1
##### 11/12/23

  For the freedom project this year, I have decided to use three.js to create a 3D character game. The main objective of the game is to be able to talk to other characters around the map and your reputation fluctuates depending on your decisions. The reason I wanted to create this game is because I wanted to try animation in 3D for characters and I love creating stories. This project idea will give me a way to incorporate both in my freedom project. I chose to use three.js because it looked the most flexible in terms of creating 3D models of my own characters. 
  During my time tinkering with three.js, I tried using the [manual](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene) and following the steps to set up a scene. This is important because, without the scene, your javascript would not appear in the code. The 3D model needs an area to sit on before it can appear in the HTML. Despite this, I had trouble setting up the scene because I was unsure whether the code was working or not since there was no visual indication. I later discovered, with the help of [this video](https://www.youtube.com/watch?v=YKzyhcyAijo) that I just needed to create an object and animate it. Here is the code for the scene that I would need to use every time:
  ``` javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```
After creating the scene, I created 2 boxes. I tinkered around with each detail like changing the color using hex code, changing the perspective camera, and the length of each side of the 3D model. I later animated them to spin in opposite directions and at different speeds. The week afterward, I decided to create another form of object which is a line. I tinkered the same way as the cubes but without animating. I thought, so far, the tool was easy to use because I had to change very little from the given code from the website. However, one restriction I realized was I was unable to use the same geometry to create other shapes like pyramids. Maybe I'll try to make a triangular prism next time.

This is part of the brainstorming and creating a prototype part of the EDP (engineering design process) because I have decided what I wanted to create and decided on my tool. Using this tool, I will brainstorm what details of the tool I can incorporate into my freedom project so that I can use it to create. Some skills I have developed and improved on were "Consideration", "How to read", and "How to learn". I developed consideration because I wanted to create something meaningful with something that I personally was passionate about. Instead of just creating 3D models, I decided to use these models and use it to create a character game so other people can enjoy using the 3D character models. I developed how to read because I would skim the document without realizing that I left out a piece of important information that was part of the document. It would usually say something along the lines of "this would not show anything yet" but I still expect change when I booted up the server. After double-checking, I realized I had to do more code. I developed how to learn because to understand the code that I was using, I needed to tinker and change the code. By changing the details, I can understand how to create and customize my own blocks in the future by learning the material.

Here is the code that I used:
``` javascript
// code of shapes
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // dimensions
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); // changed color 
const cube = new THREE.Mesh( geometry, material ); // This is for naming the variables
scene.add( cube );

const geometry2 = new THREE.BoxGeometry( 2, 1, 1 ); // I changed this so it can be a rectangle
const material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
const rectangle = new THREE.Mesh( geometry2, material2 );
scene.add( rectangle );

camera.position.z = 5;
// code of animating shapes
function animate() {
requestAnimationFrame( animate ); // how fast it is animated
        cube.rotation.x -= 0.02;
        cube.rotation.y += 0.00;
        rectangle.rotation.x += 0.00;
        rectangle.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();


// code of lines
const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } );
const points = [];
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );

render scene
```

[Next](entry02.md)

[Home](../README.md)
