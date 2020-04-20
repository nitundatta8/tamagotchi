import {Pet} from './../src/tamagotchi-game.js';

describe('Pet',() =>{
  jest.useFakeTimers();
  let pet;

  beforeEach(function(){
   pet = new Pet("Mametchi");
   pet.setHungry();
  })

  test('should have a name and food level 10',() =>{
   expect(pet.name).toEqual("Mametchi");
   expect(pet.foodLevel).toEqual(10);

  });

  test('should increase food level to 10 after 5 seconds', () => {
    jest.advanceTimersByTime(5001);
    expect(pet.feed()).toEqual(10);
  });

  test('should increase happy meter by 5 if light if off ',() =>{
    jest.advanceTimersByTime(6001); 
    pet.sleep();
    expect(pet.happyMeter).toEqual(5);
  });

  test('should increase happy meter by 10 if play time is true',() =>{
    jest.advanceTimersByTime(7001); 
    console.log(pet.happyMeter)
    pet.playground();
    
    expect(pet.happyMeter).toEqual(10);
  });

  test('should decrease tiredness by 1 after back from playground',() =>{
    pet.getTired();
    expect(pet.tiredness).toEqual(9);
  });





});

