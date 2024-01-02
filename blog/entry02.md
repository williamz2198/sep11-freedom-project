# Entry 2
##### 12/17/23

After a month of tinkering with my tool, I have learnt a lot and used many techniques to create a model and make a character move in a semi-realistic scene. Although it may sound like not a lot, there were a lot of thinking I had to do.

For the first couple weeks, I used [this link](https://tympanus.net/codrops/2021/10/04/creating-3d-characters-in-three-js/) to learning how to group the boxes in entry one. This way, when I would animate and move the character, I only would need to worry about the whole model and not the individual parts of the character. I later decided that I wanted to create an open world as a test for my final freedom project. To do this, I created a scene and added a plane to the scene. This would act as a floor. Using the tutorial from the website, however, would give me code that make the plane spin. This had to do with the animation function making the plane spin. 
Then, I worked on creating a box in a game environment using [this video](https://www.youtube.com/watch?v=sPereCgQnWQ). This was a very useful video that helped me get started on creating a moving character. Using this video, I created a box, its relation with light, gravity and movement commands. I followed the tutorial with several tweeks to the code to ensure I had the movement to my liking. 

```js
 const light = new THREE.DirectionalLight( 0xffffff, 2 );
  light.position.z = 3;
scene.add(light)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
```
This code made it so there was a light that can cast a shadow onto the plane and I was able to move the camera. These were properties that I wanted to add but I could not figure out without the video using only text.

```js
cube.velocity.x = 0
   cube.velocity.z = 0
   if (keys.w.pressed) cube.velocity.z = -0.02
   else if (keys.s.pressed) cube.velocity.z = 0.02
   if (keys.a.pressed) cube.velocity.x = -0.02
   else if (keys.d.pressed) cube.velocity.x = 0.02
```
This code made it so the box can move according to the keys wasd. This was extremely necessary in making my character game. 

I am still on the "creating a prototype" in the engineering design process (EDP) because I am deciding what I want for my final project and testing to make sure I am creating what I want. It would make it easier to import any character designs or movement onto my code in the future when I have the required code for the project. During this month on tinkering, I developed the skills problem decomposition and debugging. I got better at debugging because at first, I realised many tutorials would use the animate function as a way to render the scene. This made it confusing for me because even though the code I wanted to make was not animating anything, it would still use the animate function. It made it hard to debug any code that I wanted to fix that had to do with animation. I realised later that it was used to I can animate other variables in the future and it did not necessarily have to animate. I would also struggle on making sure every since piece of the code can react properly with eachother. If there was one code that was missing a property like ` light.castShadow = true`, then the shadow would not show onto either object. This would be even more annoying when there would not be an error because I had to manually check every object that needed the property. I would make sure every variable would get the correct properties and checked them repeatedly to get the code to work correctly. I would develop problem decomposition because while creating the character model, I had to seperate the model into different parts such as the head, arms, body, etc. I would create down the whole model into smaller tasks and creating a property for each of them so I can easily manage my code. 

Next time, I have an entire break worth of time to work on my tool. I want to try to make the cube jump when I press space and move entire models. If I am able to do that, then I want to add more models to my scene. Another minor addition making the camera static to the cube. This way, it would feel more comfortable, similar to roblox. 


[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
