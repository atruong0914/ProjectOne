//button functions, yes no, go back main page, go back first page
$('#btn-continue').click(function(){
    window.location.href='page1.html';
 })

 $('#btn-yes').click(function(){
    window.location.href='yespage.html';
 })

 $('#btn-back').click(function(){
    window.location.href='index.html';
 })

 $('#btn-back1').click(function(){
    window.location.href='page1.html';
 })

 $('#btn-no').click(function(){
    window.location.href='nopage.html';
 })

console.log(window.location.href)

 //api stuff
//making a function called quote
function quote(){
    //use ajax to fetch api
    // if the location is = yespage.html then run this function
    if (document.location.pathname === '/yespage.html'){
   $.ajax('https://animechan.vercel.app/api/random')
    //success 
    .then(quote => {
        console.log(quote)
        render(quote)
    //error
    }), (error => {
        console.log(error)
    })
}
}
quote()
//when it works, render it on page(show it on the page)
function render(quote){
    $('.quote').text(quote.quote)
}