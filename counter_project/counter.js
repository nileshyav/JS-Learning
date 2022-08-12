const counter = document.querySelector('.one');

counter.innerHTML = 500;

let count = 1;

setInterval(() => {
  if (count < 1001) {
    count;

    counter.innerHTML = count++;
  }
}, 1);
