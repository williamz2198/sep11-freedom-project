# Entry 3
##### 2/11/24

During this time of tinkering with my tool, I tried to make my tool and scene more immersive with controls and collisions so it can feel like a real game. This was the hardest part so far because there were many obstacles that I went through as there were many parts in making the controls. 

Firstly, during winter break, from the code from my previous blog, I added collisions and gravity so the block and act realistic. This allowed the block to fall and land onto the plane without the block falling through. Using [this video](https://www.youtube.com/watch?v=sPereCgQnWQ), I was able to follow and create this code:
```js
this.position.set(position.x, position.y, position.z)
      this.bottom = this.position.y - this.height / 2
      this.top = this.position.y + this.height / 2

update(group) {
      this.bottom = this.position.y - this.height / 2
      this.top = this.position.y + this.height / 2

      this.position.x += this.velocity.x
      this.position.z += this.velocity.z
      this.applyGravity()
    }
```
This part gets the top and the bottom part of the boxes so it is able to know when to stop. 
```js
    applyGravity() {
      this.velocity.y += this.gravity
      // hit the ground
      if (this.bottom + this.velocity.y <= ground.top){
        this.velocity.y *= 0.7
        this.velocity.y = -this.velocity.y
      } else this.position.y += this.velocity.y
    }
  }
```
This applys the function that tells the code if the two boxes touch, then the movement would stop of the box falling. I also added another box with the same property so I can easily add more if I'd like in the future.
[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
