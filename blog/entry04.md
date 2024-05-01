# Entry 4
##### 3/17/2024

Beginning to start my freedom project, I created a file where my final project is going to be. Using previous knowledge of the tool, I decided to create the basic layout of my project with the scene, camera, background and the layer where I would put my buldings. I have started the project and using the Box material elements, I made the grass, roads and started part of the building. 

```js
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
```
Here is an example of the code that I have done for the green grass and the concrete roads. I created a lot others that I have organized into comments that sorts out the ground and one building. I think the annoying part was putting the building in the correct place and putting all the corrdinates correctly. 

After, I thought about the the player experience and that the camera would look better if it was in first person instead. I previously tried to create a third person camera but then I found that first person camera was easier using first person controls. By looking at some [videos](https://www.youtube.com/watch?v=oqKzxPMLWxo), it helped me create a first person camera. I had some struggle so I had to create a background to make sure the camera was working because when I spun the scene around, it would only show the same color. 

```js
 const controls = new FirstPersonControls( camera, renderer.domElement );
  controls.movementSpeed = 150;
  controls.lookSpeed = 0.1;
```

This is part of the creating a prototype of the engineering design process (EDP) where I would start to design the project to be part of the MVP. I need to make sure the game works before adding details. I want to use advance javascript but before I can do that, I need to create the basic model in order for me to create functions based on player input. The skills I developed are creativity because I need to think about how my project is going to be like and design it in an appealing way. I also developed debugging because I had to go through a lot of trial and error for my code so my object can be positioned correctly. Overall, I think this is the most dificult of the freedom project because I'm not sure how to incorporate my learnt tool to my project but I will continue to learn more ways to create a character in a 3D world. 

[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
