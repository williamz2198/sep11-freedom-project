# Tool Learning Log

Tool: three.js

Project: Socialize Project

---

10/29/23:
links:
* https://www.youtube.com/watch?v=t3lbOyH5eKo
* https://www.youtube.com/watch?v=YKzyhcyAijo

* I thought importing the tool was the most difficult
* I imported my tool into my terminal and animated 2 boxes(one cube and one prism) of different colors spinning in opposite ways
* Reading the tutorials made me confused about what the results were supposed to show but as I continued reading, I understood what each part was supposed to show
* When I tried to create a cube again by copying and pasting, it didn't work but then I realized I needed to create a new name for the prism
* next, I'm going to try to animate the boxes a different way and test all the features the tool has

11/26/23
* created a 3d block model
* added the head, body, arms, and legs into a group
* https://tympanus.net/codrops/2021/10/04/creating-3d-characters-in-three-js/

12/3/23

* tried creating a scene
* added grass with a planar
* used planar from three.js
* use a website tutorial but couldn't understand why it was spinning
* after deleting some of the code, i figured it out

12/10/23

* used a tutorial to add a box in a scene and I was able to control the camera
* I tried to move my file into another folder and I had trouble with turning the versions
* https://www.youtube.com/watch?v=sPereCgQnWQ
* tried different textures and how they reacted with light
* I also tried changing the shapes so see how different colors and shapes would react with shadows and shading

-- the top shows the light and how it will affect the shadows of the shape, the 2 represents intensity of light
-- the new orbit controls means I get to control the camera, this will be very useful in creating a game
```js
 const light = new THREE.DirectionalLight( 0xffffff, 2 );
  light.position.z = 3;
scene.add(light)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  ```

  -- Later, I will continue to watch to video but I will also try to find tutorials on ways to interact with certain objects in the scene

12/17/23

 * used the same video and created a gravity and collision
 * I am now able to move the box using wasd
 * When the box "spawn", the box will fall and bounce with the gravity
 ```js
 cube.velocity.x = 0
    cube.velocity.z = 0
    if (keys.w.pressed) cube.velocity.z = -0.02
    else if (keys.s.pressed) cube.velocity.z = 0.02
    if (keys.a.pressed) cube.velocity.x = -0.02
    else if (keys.d.pressed) cube.velocity.x = 0.02
 ```
 code above shows that if each key is pressed, then the cube moves a certain direction
 * next I will want to make the box jump using space
 * I want to be able to move entire models (character models)

 winter break + the week after

 * made the box able to jump using the space bar
 * added another box to test how it would work with another object
 * Added collision with the object
 * I tried to move the camera position but was unable to successfully finish
 * https://www.youtube.com/watch?v=C3s0UHpwlf8
 * https://github.com/tamani-coding/threejs-character-controls-example/blob/main/src/characterControls.ts
 * https://www.youtube.com/watch?v=vsAURPIOBfI
 * https://www.youtube.com/watch?v=UuNPHOJ_V5o git

 * I need to find a way to revamp my code and find a way to fit their code into mine

 1/21/24

 Tried using the documentation to add workds and lines onto a scene.
 I tried changing the colors and words
 I ended up not liking the text and will probably not use them in my freedom project
 https://threejs.org/docs/index.html#manual/en/introduction/Creating-text

 2/4/2024

 I tried adding premade animations and models to try seeing how it would work on my project
 Using a tutorial https://www.youtube.com/watch?v=UuNPHOJ_V5o, I made movement with the 3d model and I hope to impliment it with my own models or box characters in the future
 I later will watch his other tutorials to create a camera that follows the character
 I found it interesting to see the different ways different people used to create similar project with different code
 Instead of using the model that they used in the video, I used a smaller one that I enjoyed

 3/3/24

 Started working on the freedom project
 Using the knowledge from previous tinkering, I created a scene and the street that I plan my game to take place in
 I also created a group where I will paste multiple times to have a typical house
It was hard to create the houses because I had to specificly put coordinates for each, I might have to find a new way to add them

  3/10/24

* Instead of using the third person camera, I have decided to try the first person camera. I chose to change it because there was a function that was specificly made for first person camera in the documentation.
* Using this tutorial, https://www.youtube.com/watch?v=oqKzxPMLWxo, I got started on camera with this code:

```js
  const controls = new FirstPersonControls( camera, renderer.domElement );
  controls.movementSpeed = 150;
  controls.lookSpeed = 0.1;
```
* At first I was really confused on whether the code was working because it showed all black, but after changing the background to an image, I was able to see that the camera was working

4/15/24

* I have finished most of the frame for my project by creating the buildings
* I need to implement the controls I created before onto my project
* to add more javascript, I need to make some doors interactive and when a specific button is pressed, a door will open

Added a sky and background
I was unable to correctly use the camera so I had to add a way to see if my camera was changning which made me add a sky
```js
  const skybackground = new THREE.CubeTextureLoader();
  const loader = skybackground.load(['../sky.png'], ['../sky.png'], ['../sky.png'], ['../sky.png'], ['../sky.png'], ['../sky.png'])
```
<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
