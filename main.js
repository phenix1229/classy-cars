class Vehicle {
  constructor(name, wheelCount, maxSpeed){
    this.name = name;
    this.wheelCount = wheelCount;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
  }

    accelerate() {
      if (this.speed < this.maxSpeed){
      this.speed += 40;
      }
    };
}

class Car extends Vehicle{
  constructor(name){
    super(name, 4)
  }

  drive() {
    return 'Vroom. '
  }

}

class Ferrari extends Car{
  constructor(){
    super()
    this.name = 'Ferrari';
    this.maxSpeed = 180;
  }

  accelerate(){
    if (this.speed < this.maxSpeed){
      this.speed += 90;
    }
  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}