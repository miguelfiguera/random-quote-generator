import React from "react";

export default function QuoteBox() {

  const Quote = async () =>{
   try { const request= await fetch(' http://api.quotable.io/quotes/random', {mode : 'cors'})
    const parsed= await request.json();
    console.log(parsed[0])
    return parsed[0]}
    catch(error){console.log(error)}
  }



  return (
    <div id="quote-box" className='md:container md:mx-auto'>
      <h4 id="text-32"> "{Quote.content}"</h4>
      <p id="author">{Quote.author}</p>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote"><i className="fa-brands fa-square-twitter fa-2xl"></i></a>
      <button id="new-quote" className="text-3xl" onClick={Quote}> New Quote</button>
      
    </div>
  );
}
