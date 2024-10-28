'use strict';

document.querySelector('#formCD').addEventListener('submit', function(event) {
    event.preventDefault()

    const author = event.target.elements.textAuthor.value
    const title = event.target.elements.textTitle.value
    const year = parseInt(event.target.elements.textYear.value)

    const newRow = document.createElement('tr')

    const authorCell = document.createElement('td')

    authorCell.textContent = author
    newRow.appendChild(authorCell)

    const titleCell = document.createElement('td')
    titleCell.textContent = title
    newRow.appendChild(titleCell)

    const yearCell = document.createElement('td')
    yearCell.textContent = year
    yearCell.classList.add('right')
    newRow.appendChild(yearCell)

    const deleteIcon = document.createElement('img')
    deleteIcon.classList.add('delete')

    deleteIcon.addEventListener('click', function() {
        this.closest('tr').remove()
    })

    const deleteCell = document.createElement('td')
    deleteCell.classList.add('right')
    deleteCell.appendChild(deleteIcon)
    newRow.appendChild(deleteCell)

    document.querySelector('table > tbody').appendChild(newRow)

    document.querySelector('table').classList.add('visible')

    event.target.reset();
})