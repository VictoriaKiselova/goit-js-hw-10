import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function onSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  let btn = event.target.elements.state.value;

  const createPromise = (btn, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (btn === 'fulfilled') {
          resolve(delay);
        }
        reject(delay);
      }, delay);
    });
  };

  createPromise(btn, delay)
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
