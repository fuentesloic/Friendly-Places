const displayPlaces = (places) => {
  const uls = ''
  places.map(place => {
    let li =  document.createElement('li')
    li.innerHTML = `
      <a href="https://www.google.com/maps/@${place.location.lt},${place.location.lg},17z">
        ${place.name} - ${place.city}
      </a>
      <a href="#" class="remove" data-place-id="${place.id}">x</a>
    `
    document.querySelector('#places').appendChild(li)
    document.querySelector(`[data-place-id="${place.id}"]`)
      .addEventListener('click', () => {
        world.remove(place.id)
        location.reload() 
      })
  })
}
