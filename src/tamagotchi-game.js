export class Pet{
  constructor(name){
    this.name = name;
    this.foodLevel = 10;
    this.happyMeter = 0;
    this.flag = true;
    this.tiredness = 10;
  }

  setHungry(){
    setInterval(() =>{
     return this.foodLevel--;
     
    },1000)
  }

  feed(){
      return this.foodLevel =10;
  }
  sleep(){
    if (this.flag === true) {
      return this.happyMeter = 5;
    } else {
      return this.happyMeter;
    }
    
  }

  playground(){ 
    if (this.flag === true) {
      return this.happyMeter += 10;
    } else {
      return this.happyMeter;
    }
  }

  getTired(){ 
    if (this.flag === true) {
      return this.tiredness -= 1;
    } else {
      return this.tiredness;
    }
  }

  

};

