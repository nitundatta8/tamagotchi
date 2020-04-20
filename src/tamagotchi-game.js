export class Pet{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
  }

 


  setHungry(){
    setInterval(() =>{
     return this.foodLevel--;
    },1000)
  }

  feed(){
      return this.foodLevel =10;
  }

};

