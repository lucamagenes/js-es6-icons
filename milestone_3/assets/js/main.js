//milestone 1
//mostriamo in pagina tutte le icone disponibili come da layout.


// creare un array
// ciclare l'array
// per ogni elemento dell'array stamparlo a schermo


const fontIcons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
]


const container = document.querySelector('.cards')

document.getElementById('filtro').addEventListener('change', changeSelect);

function changeSelect() {
    let valoreSelect = document.getElementById('filtro').value;
    //console.log(valoreSelect);

    container.innerHTML = '';

    let tipoFiltro = '';
    if (valoreSelect == 'animals') {
        tipoFiltro = 'animals'
        createElements()
    } else if (valoreSelect == 'vegetables') {
        tipoFiltro = 'vegetables'
        createElements()
    } else if (valoreSelect == 'user') {
        tipoFiltro = 'user'
        createElements()
    } else {
        tipoFiltro = 'all'
        createElements()
    }

    console.log(valoreSelect);
    console.log(tipoFiltro);


}

/* let tipoFiltro = valoreSelect
console.log(tipoFiltro); */

const colors = [
    'orange',
    'blue',
    'purple'
]

function createElements() {

    fontIcons.forEach((icon) => {

        let color = '';

        if (icon.type == 'vegetable') {
            color = 'orange'
        } else if (icon.type == 'animal') {
            color = 'blue'
        } else if (icon.type == 'user') {
            color = 'purple'
        }

        const elementHTML = `
        <div class="card">
            <i class="${icon.family} ${icon.prefix}${icon.name} fa-lg" style="color:${color} "></i>
            <span>${icon.name.toUpperCase()}</span>
        </div>
        `

        container.innerHTML += elementHTML;
    })

    return icon.type
}


