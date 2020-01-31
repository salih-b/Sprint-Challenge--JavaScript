// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1{
constructor (attr){
    this.length = attr.length,
    this.width = attr.width, 
    this.height = attr.height
    }
    volume(){
        return this.length * this.height * this.width;
      }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
}
let cuboid1 = new CuboidMaker1({length: 4, width: 5, height: 5});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
//  Find out the formulas for volume and surface area for cubes and create those methods using 
// the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1{
    constructor(attr){
    super(attr);
    }
    cubeVolume(){
        return this.length **3 ;
    }
    cubeSurfaceArea(){
        return 6 * (this.length * this.width);
    }
}
const cube = new CubeMaker({length: 4, width: 5, height: 5});
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130