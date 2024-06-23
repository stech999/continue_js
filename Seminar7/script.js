// localStorage.setItem('user', JSON.stringify({name: 'Ivan'}));
console.log(JSON.parse(localStorage.getItem('user')));
localStorage.setItem('string', 'Hello everybody');
// localStorage.removeItem('user');
localStorage.setItem('new', 'Hello everybody');

// localStorage.clear();
console.log(localStorage.key(1) + ' key(1)');
console.log(localStorage.key(0) + ' key(0)');

localStorage.setItem('name', JSON.stringify({name: 'Petr'}));
localStorage.setItem('str', 'Hello everybody');


