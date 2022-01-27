const url = 'https://api.quotable.io/random'

const getData = async (url) =>{
    const req = await fetch(url)
    const resp = await req.json()
    const quote = document.getElementById('vamoapintarloaqui')
    
quote.innerHTML = `
<p id="text">"${resp.content}"</p>
<h4 id="author">${resp.author}</h4>

`
const tweet = document.getElementById('tweet-quote')
tweet.setAttribute("href", `https://twitter.com/intent/tweet?text="${resp.content}."`);
}
getData(url)

const boton = document.getElementById('new-quote')
boton.addEventListener('click', e=>{
    getData(url)
})

