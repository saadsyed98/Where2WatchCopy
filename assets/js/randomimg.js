var form = document.getElementById('IMGbtn')

form.addEventListener('click',function(event){
    event.preventDefault()

    var url = 'https://picsum.photos/200'

    var image = document.getElementById('img')

    image.src = url
})