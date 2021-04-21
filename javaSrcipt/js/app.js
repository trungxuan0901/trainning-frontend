// // function plusNumber(a,b) cach 1
// // {                                    dung de khai bao ham
// //     return a + b;
// // }
// // const plusNumber = (a,b) => a+b; cach hai
// // console.log(plusNumber(5,7));
// // const myFunction = () =>

// // const car = new Object();
// // car.name = 'Lexus'
// // car.model = 1200;
// // console.log(car);

// class car {
//     constructor(name, model,color) {
//     this.model= model;
//     this.name= name;
//     this.color= color;
// }
// run(){
//     return `car ${this.name}`
// }
// stop(){
//     return `blogger`
// }
// get modelCar(){
//     return`Car have ${this.name}`
// }
// set modelCar(changeModel){
//     return this.model=changeModel;
// }
// }
// const car1= new car();
// car1.modelCar= 'blue';
// car1.model = 1400;
// car1.name= 'Lexus';
// car1.color='red';
// console.log(car1);
// console.log(car1.run());
// console.log(car1.modelCar);
// const text = document.getElementById('demo').innerHTML;

// console.log(text);
// addElement = () => {
//     //create element
//     let btn = document.createElement('button');
//     console.log(btn);
//     btn.innerHTML = 'New Element';
//     document.body.appendChild(btn);
//   }
   changeColor = () =>{
       document.getElementById('demo').style.color ='red'
       document.getElementById('demo').style.fontSize = 50;

   }
   console.log(changeColor);