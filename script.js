const coffeeContainer = document.querySelector('main')

function setLoading() {
    coffeeContainer.innerHTML = ''//erase everything in main. no children
    const h2 = document.createElement('h2')//create element h2
    const loading = document.createTextNode('LOADING...')//create tet-loading
    h2.appendChild(loading)//take it-h2 and add it to the end
    coffeeContainer.appendChild(h2)
    
}
function displayCoffeeList(coffeeList) {
    coffeeContainer.innerHTML = ''
    coffeeList.map(coffee => {//for each 1 call them coffee
        const card = document.createElement('div')//create div somewhere
        const img = document.createElement('img')
        const title = document.createElement('h3')//create h3 
        const description = document.createElement('p')//stick dioscp in p
        title.appendChild(document.createTextNode(coffee.tittle))//stick black coffee inside h3
        description.appendChild(document.createTextNode(coffee.description))//stich descrip inside p-coffee yo
        card.appendChild(title)//add to the end of div
        card.appendChild(description)//add to the end of div
        coffeeContainer.appendChild(card)//take div and stuck it in main
    })


}

function getCoffee(temp) {
    setLoading()//first set loading message
    fetch(`https://api.sampleapis.com/coffee/${temp}`)
    .then(response => response.json())
    //.then(coffeeList => displayCoffeeList(coffeeList))
    .then(displayCoffeeList)
    .catch(console.error)// TODO: display error for user
}



getCoffee('hot')
