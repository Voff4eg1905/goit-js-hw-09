import Notiflix from 'notiflix';

const formEl = document.querySelector(".form");

const onFormSubmit = event => {
  let {delay, step, amount} = event.target.elements
  event.preventDefault();
 delay = delay.value*1000;
 step = step.value*1000;
 amount = amount.value;

 
  for (let i = 1; i <= amount; i +=1) {
    if (i>1) {
      delay = delay + step;
    }
    createPromise(i, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
   }
 
 
}
formEl.addEventListener("submit", onFormSubmit)










function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout (() => {
      if (shouldResolve) {
        resolve(({ position, delay }));
        console.log("Success");
      } else {
        reject(({ position, delay }));
        console.log("Failed");
      }
    }, delay);
   
  });
 return promise;
}