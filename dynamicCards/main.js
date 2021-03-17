const container = document.querySelector('.container')

const cardArr = [
  {color: 'red', header: 'Howdy', desc1: 'Lorem ipsum dolor sit.', desc2: 'Odio amet incidunt.'},
  {color: 'green', header: 'Sup', desc1: 'Lorem ipsum dolor sit.', desc2: 'Odio amet incidunt.'},
  {color: 'blue', header: 'Hello', desc1: 'Lorem ipsum dolor sit.', desc2: 'Odio amet incidunt.'},
]

const createCards = () => {
  const cards = cardArr
    .map(({ color, header, desc1, desc2 }) => (
      `
        <div class="card-wrapper ${color}">
          <div class="card-header">
            <h2>${header}</h2>
            <p>${color}</p>
          </div>
          <div class="card-content">
            <p>${desc1}</p>
            <p>${desc2}</p>
          </div>
        </div>
      `
    )).join('')
    container.innerHTML = cards
}

createCards()