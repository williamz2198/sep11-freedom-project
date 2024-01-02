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

 winter break

 * made the box able to jump using space bar
 * added another box to test how it would work with another object
 * added collision with the object
 * I tried to move the camera position but was unable to successfully finish
 * https://www.youtube.com/watch?v=C3s0UHpwlf8
 * https://github.com/tamani-coding/threejs-character-controls-example/blob/main/src/characterControls.ts
 * https://www.youtube.com/watch?v=vsAURPIOBfI
 * https://www.youtube.com/watch?v=UuNPHOJ_V5o git

 * I need to find a way to revamp my code and find a way to fit their code into mine
<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
