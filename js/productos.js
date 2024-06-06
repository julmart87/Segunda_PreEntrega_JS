
//* Lista de Productos:

const sectionProductos = document.getElementById('sectionProducto'); 
const articleProductos = document.createElement('article');
const ulProductos = document.createElement('ul');

sectionProductos.appendChild(articleProductos);
articleProductos.appendChild(ulProductos);

const linksProductos = {
    "Adidas": ["Adizero", "Ultraboost", "Response", "Superstar"],
    "Nike": ["Vomero", "Pegasus", "Precision VI", "Air Max"],
    "Puma": ["Deviate Nitro 2", "Magnify Nitro 2", "Velocity Nitro 3", "Ca Pro Classics"],
    "Sauconi": ["Axon 2", "Endorphin Speed 3", "Endorphin Pro 3", "Guide 15"]
};

const imagenesProductos = {
    "Adizero": "./assets/img/adizero.jpg",
    "Ultraboost": "./assets/img/ultraboost.jpg",
    "Response": "./assets/img/response.jpg",
    "Superstar": "./assets/img/superstar.jpg",
    "Vomero": "./assets/img/vomero.jpg",
    "Pegasus": "./assets/img/pegasus.jpg",
    "Precision VI": "./assets/img/precision.jpg",
    "Air Max": "./assets/img/airmax.jpg",
    "Deviate Nitro 2": "./assets/img/deviate.jpg",
    "Magnify Nitro 2": "./assets/img/magnify.jpg",
    "Velocity Nitro 3": "./assets/img/velocity.jpg",
    "Ca Pro Classics": "./assets/img/classic.jpg",
    "Axon 2": "./assets/img/axon.jpg",
    "Endorphin Speed 3": "./assets/img/endorphin.jpg",
    "Endorphin Pro 3": "./assets/img/endorphin3.jpg",
    "Guide 15": "./assets/img/guide.jpg"
};

const imagenesMarcas = {
    "Adidas": "./assets/img/adidas.jpg",
    "Nike": "./assets/img/nike.jpg",
    "Puma": "./assets/img/puma.jpg",
    "Sauconi": "./assets/img/saucony.jpg"
};

for (const marca in linksProductos) {
    const liMarca = document.createElement('li');

    const imgMarca = document.createElement('img');
    imgMarca.src = imagenesMarcas[marca];
    imgMarca.alt = `${marca} logo`;
    imgMarca.style.height = '120px'; 
    imgMarca.style.width = '150px';
    imgMarca.style.display = 'block'; 
    imgMarca.style.margin = '0 auto';

    const aMarca = document.createElement('a');
    aMarca.href = `${marca.toLowerCase()}.html`;
    aMarca.textContent = marca.toLowerCase();

    liMarca.appendChild(imgMarca);
    liMarca.appendChild(aMarca);

    liMarca.style.textAlign = 'center';
    aMarca.style.textAlign = 'center';

    const ulSubProductos = document.createElement('ul');
    for (const producto of linksProductos[marca]) {
        const liSubProducto = document.createElement('li');

        const imgProducto = document.createElement('img');
        imgProducto.src = imagenesProductos[producto];
        imgProducto.alt = `${producto}`;
        imgProducto.style.width = '80px'; 
        imgProducto.style.display = 'block'; 
        imgProducto.style.margin = '0 auto';


        liSubProducto.appendChild(imgProducto);
        liSubProducto.appendChild(document.createTextNode(producto));
        ulSubProductos.appendChild(liSubProducto);
    }

    liMarca.appendChild(ulSubProductos);
    ulProductos.appendChild(liMarca);
};


