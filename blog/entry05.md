# Entry 5
##### 5/07/24

During this part of the Freedom Project, I am testing/ evaluating and creating my prototype of the Engineering Design Process where I finished the MVP of the project by creating the box controlled by the user and the platform. My freedom project has a platform for the ground, multiple buildings, and a box that can be controlled using the keys. I used the many things I learned while tinkering with the tool and copied it to my Freedom Project. 

I used the model group to combine the walls of each building into one so that I was able to move them together instead of each wall/ part individually. Making the scene with the sky, ground, and buildings was the first thing I created but it was complicated because there was a lot of copying and pasting that went into creating the buildings. Using the Standard material, I made the buildings of different colors and added a shadow to each of them. I think I can refactor the code to make it less repetitive in the future. 

``` javascript
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
```

Here is an example of one of my buildings. Each thing that was added to the group was a piece of wall or window. The position is also set according to where I want to place the building. 

Another thing that I learned and added was the controls. To control the box, I added the controls for WASD to move forward, left, backward, and right. Through the animate function, I ran the movement controls and the camera controls 

``` javascript
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
    controls.update(50)
  }
  animate()
```

For beyond my MVP, I will make the person controls better by making it first-person and making the buildings collide with the player. I also want to add some things interactive, however, I'm not sure which things are possible for my project. The skills I developed are Time Management because I need to time myself to finish my MVP. I needed to space my work out throughout the weeks for me to finish my project. I also developed consideration because I need to think about how people will use the game. I need to think of how they will interact with the project and how they will view it. 

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
