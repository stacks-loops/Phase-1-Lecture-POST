const url = "http://localhost:3000/characters"

// fetches information from API endpoint and processes it into usable code
// TODO: write GET request here

fetch("http://localhost:3000/characters")
.then((resp) => resp.json())
.then((data) => console.log(data))
.then((data) => renderCharacters(data))

function renderCharacters(charArr) {
    // console.log(charArr)

    const ul = document.querySelector('ul')

    charArr.forEach((charObj) => {

        const li = document.createElement('li')

        // grabs name from object and places it within <p> tag
        const p = document.createElement('p')
        let name = charObj.name
        p.textContent = name
        p.style.color = '#7a2d96'

        // grabs image URL from object and sets it to <img> tag src
        const img = document.createElement('img')
        let imgURL = charObj.image
        img.src = imgURL
        img.style.margin = '5px'
        img.style.border = 'solid 2px #7a2d96'

        // combine DOM tree to render to screen
        li.appendChild(p)
        li.appendChild(img)
        // li.append(p, img)

        ul.append(li)

    })
}

const form = document.querySelector('form')

form.addEventListener('submit', (e) => handleAddNewChar(e))

function handleAddNewChar(e) {
    e.preventDefault()
    console.log(e.target)

    let newCharObj = {

      name : e.target.name.value
      image : e.target['image url'].value,
      age : e.target.age.value


    }

  //  console.log(newCharObj)
  // This is the POST
  // fetching to YOUR endpoint
  // headers you are using JSOM
  // body contains the actual content that get sent back
  // we need to call stringify.json 
  // be able to explain what a post request does

fetch(url, {
        method : 'POST',
        headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
        },
         body : JSON.stringify(newCharObj)
    })
    .then((resp) => resp.json())
    .then((data) => renderCharacters([data]))

}

//post needs to be performed on the url that you want to add an object to

// delete an image by going into db.json and manually deleting it, you can also manually add there instead of
// using the post function in the url
