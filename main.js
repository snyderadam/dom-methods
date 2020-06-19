const parentElement = document.querySelector('body')


let mainElement = document.createElement ('main')
parentElement.append(mainElement)

let buttonElement = document.createElement ('button')
parentElement.append(buttonElement)
buttonElement.width = '100px'
buttonElement.height = '75px'
buttonElement.append('Remove Elements')
buttonElement.id = 'buttonOne'

let image = document.createElement('img')
mainElement.append(image)
image.src = 'https://cdn.theatlantic.com/thumbor/3vB7judz8lddkUphqXNMqBvaMfo=/0x0:1200x675/720x405/media/img/mt/2019/02/momo2/original.jpg'

let anchorElement = document.createElement('a')
mainElement.append(anchorElement)
anchorElement.href = 'https://i-d.vice.com/en_us/article/59jzdn/scariest-films-on-netflix?utm_campaign=global&utm_source=idfbuk'
anchorElement.append('A list of scary movies according to i-D magazine.')

buttonOne.addEventListener('click', function (){

    mainElement.remove()
})