import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const buttonStart = document.querySelector('button');
function showPromise() {
  const myInput = document.querySelector('input[name="delay"]');
  const delay = Number(myInput.value);
  console.log(delay);
  const stateValue = document.querySelectorAll('input[name="state"]');

  const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
      stateValue.forEach(element => {
        if (element.checked && element.value === 'fulfilled') {
          resolve();
        }
      });
      reject();
    }, delay);
  });
  promises
    .then(() => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay} ms`,
        messageColor: 'white',
        color: '#59a10d',
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay} ms`,
        messageColor: 'white',
        color: '#F35F37',
        position: 'topRight',
        iconColor: 'white',
      });
    });
}

buttonStart.addEventListener('click', showPromise);
