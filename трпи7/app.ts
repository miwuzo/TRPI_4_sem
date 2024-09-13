// 2.	Создать промис, который через 3 секунды генерирует случайное число.
//    Результат выполнения промиса (сгенерированное число) вывести в консоль.

// let promise = new Promise(function(resolve, reject) {

   
//       const randomNum = getRandomInt(1, 10);
      

//     setTimeout(() => resolve(randomNum), 3000);
//   });
  
//   promise.then(
//     result => console.log(result), 
//     error => console.log(error) 
//   );
//используется для указания обработчиков, которые будут вызваны, когда промис разрешится
// // 3.	Создать функцию, которая принимает параметр delay и возвращает промис 
// //   (промис из предыдущей задачи). Сгенерируйте 3 числа (т.е. необходимо вызвать 
// //    функцию 3 раза) и только после того, как все промисы выполняться успешно, 
// //    вывести числа в консоль. Использовать Promise.all.

  // function generateRandomNumberWithDelay(delay: number): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => { //чтобы установить задержку на указанное количество миллисекунд, переданное в параметре delay
  //       const randomNum = getRandomInt(1, 10);
  //       resolve(randomNum);
  //     }, delay);
  //   });
  // }
  
  // const promise1 = generateRandomNumberWithDelay(1000);
  // const promise2 = generateRandomNumberWithDelay(2000);
  // const promise3 = generateRandomNumberWithDelay(3000);
  
  // Promise.all([promise1, promise2, promise3])
  //   .then((results) => {
  //     console.log(results); 
  //   })
  //   .catch((error) => {
  //     console.log(error); 
  //   });

  //   function getRandomInt(min: number, max: number): number {
  //       min = Math.ceil(min);
  //       max = Math.floor(max);
  //       return Math.floor(Math.random() * (max - min + 1)) + min;
  //     }

// // 4.	Что будет выведено в консоль и почему? 
// //    Что возвращают методы then и catch?
      let pr = new Promise((res,rej) => {
        rej('ku')
    })
    
    pr
        .then(() => console.log(1))
        .catch(() => console.log(2))
        .catch(() => console.log(3))
        .then(() => console.log(4))
        .then(() => console.log(5))
    
     
// // 5. Создайте промис, который выполнился успешно, результат выполнения промиса число 21. 
// // Вызовите цепочку методов then. Первый вызов метода then выводит в консоль результат 
// // выполнения предыдущего промиса. Второй вызов метода then выводит в консоль результат 
// // выполнения предыдущего промиса умноженного на 2. В результате в консоль последовательно 
// // должны выводиться числа 21 и 42.

let pr1 = new Promise((res, rej)=>{
  setTimeout(()=>res(21),3000)
})

     pr1.then((result:number)=>{
        console.log(result);
        return result
     })
     .then((result=>{
        console.log(result*2)
     }))

// // // // 6.	Предыдущую задачу реализуйте при помои синтаксиса async/await
//     // Когда функция помечается как async, она возвращает промис, даже если 
//     // сама функция не возвращает промис явно. 

     async function f() {

        let promise = new Promise<number>((resolve, reject) => {
          setTimeout(() => resolve(21), 5000)
        });
      
        //Оператор await используется для ожидания разрешения промиса promise. 
        //Следующий код не будет выполняться, пока промис не будет разрешен.
        let result = await promise; 
      
        console.log(result); 
        result *= 2;
        console.log(result);
        
      }
      
      f();