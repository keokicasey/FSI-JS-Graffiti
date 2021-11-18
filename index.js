let dogColumn0 = document.querySelector('#dog-table-0')
let dogColumn1 = document.querySelector('#dog-table-1')
let dogColumn2 = document.querySelector('#dog-table-2')

// selectors
let header = document.querySelector('#page-header')
let dogImages = document.querySelectorAll('.dog-image')
let dogNames = document.querySelectorAll('.dog-name')
let footer = document.querySelector('.footer')
let dogDescriptions = document.querySelectorAll('.dog-description')
let columns = document.querySelectorAll('.column')

// counter variables
let dogVote0 = localStorage.getItem('dogVote0')
if (dogVote0 === null) {
    dogVote0 = 0
}
let dogVote1 = localStorage.getItem('dogVote1')
if (dogVote1 === null) {
    dogVote1 = 0
}
let dogVote2 = localStorage.getItem('dogVote2')
if (dogVote2 === null) {
    dogVote2 = 0
}

header.style.textAlign = "left"

for (let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

for (let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = "left"
}

footer.style.color = 'red'

for (let i = 0; i < dogDescriptions.length; i++){
    dogDescriptions[i].remove()
}

for (let i = 0; i <columns.length; i++){
    let button = document.createElement('button')
    button.textContent = 'Vote'
    let idName = 'dog-name-' + i
    button.setAttribute('id', idName)
    columns[i].append(button)
}

let dogButton0 = document.querySelector('#dog-name-0')
dogButton0.addEventListener('click', function(){
    dogVote0 = parseInt(dogVote0) + 1
    dogColumn0.textContent = dogVote0
    localStorage.setItem('dogVote0', dogVote0)
})

let dogButton1 = document.querySelector('#dog-name-1')
dogButton1.addEventListener('click', function(){
    dogVote1 = parseInt(dogVote1) + 1
    dogColumn1.textContent = dogVote1
    localStorage.setItem('dogVote1', dogVote1)
})

let dogButton2 = document.querySelector('#dog-name-2')
dogButton2.addEventListener('click', function(){
    dogVote2 = parseInt(dogVote2) + 1
    dogColumn2.textContent = dogVote2
    localStorage.setItem('dogVote2', dogVote2)
})