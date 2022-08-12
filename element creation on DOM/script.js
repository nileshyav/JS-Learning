const courses = [
  {
    name: 'React Js course',
    price: 55,
  },

  {
    name: 'Django course',
    price: 45,
  },
  {
    name: 'Mern course',
    price: 12,
  },
  {
    name: 'pro backend developer',
    price: 150,
  },
];

// console.log(courses[0].name);

function generateList() {
  const ul = document.querySelector('.list-group');
  ul.innerHTML = '';
  courses.forEach((course) => {
    // at 1 iteration
    const li = document.createElement('li');
    li.classList.add('list-group-item'); // <li class = 'list-group-item'> </li> is created

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement('span');
    span.classList.add('float-right');

    const price = document.createTextNode(course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateList()

window.addEventListener('load', generateList);

const button = document.querySelector('.sort-btn');

button.addEventListener('click', () => {
  courses.sort((a, b) => a.price - b.price);

  generateList();
});

const anotherButton = document.querySelector('.btn-primary');
anotherButton.addEventListener('click', () => {
  courses.sort((a, b) => b.price - a.price);
  generateList();
});
