import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function onSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  let promiseState = event.target.elements.state.value;

  const createPromise = (promiseState, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (promiseState === 'fulfilled') {
          resolve(delay);
          return;
        } else {
          reject(delay);
        }
      }, delay);
    });
  };

  createPromise(promiseState, delay)
    .then(res => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay} ms`,
        messageColor: 'white',
        color: '#59a10d',
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: 'white',
        color: '#E76969',
        position: 'topRight',
      });
    });
}
form.addEventListener('submit', onSubmit);
