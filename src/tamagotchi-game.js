export class Pet{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
    // this.happyMeter = 0;
    // this.light = false;
  }

 
  setHungry(){
    setInterval(() =>{
     return this.foodLevel--;
    },1000)
  }

  feed(){
      return this.foodLevel =10;
  }
  // sleep(){
  //   if(!this.light){
  //     return this.happyMeter = 5;
  //   }
  //   return this.happyMeter;
  // }

};

