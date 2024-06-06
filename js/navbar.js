// navbar:
const headers = document.getElementById('header');
const navegador = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
headers.appendChild(navegador);
navegador.appendChild(nav);
nav.appendChild(ul);
navegador.className = 'navbar';

const links = ["Index", "Productos", "Contacto"];

for (const link of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `${link.toLowerCase()}.html`;
    a.textContent = link.toLowerCase();
    a.style.textDecoration = 'none';
    a.style.color = '#F0E2DF';
    li.appendChild(a);
    ul.appendChild(li);
};
console.log(navegador);
console.log(ul);