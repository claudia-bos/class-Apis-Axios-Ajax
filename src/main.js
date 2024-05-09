console.log('JavaScript connected')
console.log('JavaScript connected')

import axios from 'axios'

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => {
        console.log('pokemon response', response.data)
        document.querySelector('#poke-name').textContent = response.data.name
    })


axios.get('https://swapi.dev/api/films/5')
    .then((res) => {
        console.log('this will be logged second')
        console.log(res.data)

        document.querySelector('#star-wars-movie').textContent = res.data.title
    })

console.log('this will be logged first')

const getPokemon = async () => {
    let numPokemon = document.querySelector('input').value
    let myList = document.querySelector('ul')

    // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`)
    //     .then((res) => {
    //         console.log('pokeList', res.data)


    //         res.data.results.forEach((el) => {
    //             console.log(el)
    //             let newLi = document.createElement('li')
    //             newLi.textContent = el.name
    //             myList.appendChild(newLi)
    //         })
    //     })

    let pokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`)
    console.log(pokemonList)

    pokemonList.data.results.forEach((el) => {
            console.log(el)
            let newLi = document.createElement('li')
            newLi.textContent = el.name
            myList.appendChild(newLi)
        })

}

document.querySelector('button').addEventListener('click', getPokemon)

const orderCookies = async (evt) => {
    evt.preventDefault()
    let cookieInput = document.querySelector('#cookie-type-field').value
    let quantityInput = document.querySelector('#qty-field').value

    const bodyObj = {
        cookieType: cookieInput,
        quantity: quantityInput
    }

    let response = await axios.post('/order-cookies', bodyObj)

    document.querySelector('#order-status').innerText = response.data.message
    document.querySelector('#order-total').innerText = "Total: $" + response.data.total.toFixed(2)

}

document.querySelector('form').addEventListener('submit', orderCookies)