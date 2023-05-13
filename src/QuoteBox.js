import React, { useState, useEffect } from "react";

export default function QuoteBox() {


  const thisStyles = {
    background: "rgb(84,141,232)",
    background:
      "linear-gradient(225deg, rgba(84,141,232,1) 21%, rgba(25,25,159,1) 83%)",
    maxWidth: "40rem",
    height: "20rem",
  };

  async function Quote (){
    try {
      const request = await fetch(" http://api.quotable.io/quotes/random", {
        mode: "cors",
      });
      const parsed = await request.json();
      return parsed[0];
    } catch (error) {
      console.log(error);
    }
  };

   async function processQuote(){
    const Data= await Quote()
    const DataObject={
      author:Data.author,
      content:Data.content
    }
    return DataObject
  }


  const [quoteObject, setQuoteObject] = useState({})

  useEffect(()=>{
async function theData(){
  const result = await processQuote();
  setQuoteObject(result)
  console.log('The result',result)
  }
theData()
  },[])

  const handleNewQuote= async () =>{
    const result = await processQuote();
    setQuoteObject(result)
  }

const link=()=>{
  const theQuoteLink= `${quoteObject.content}`
  let processed=theQuoteLink.split(' ').join('20%')
  const theQuoteLinkAuthor= `${quoteObject.author}`
  let processed2 = theQuoteLinkAuthor.split(' ').join('20%')
const result=`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${processed}22%20%${processed2}`
console.log(result)
return result
}

const linkString=link()

  return (
    <div
      id="quote-box"
      className="container mx-auto border-dark rounded-3 position-absolute top-50 start-50 translate-middle"
      style={thisStyles}
    >
      <h4 id="text" className="text-center text-light fs-3 pt-5 pb-4">
        <em>"{quoteObject.content}"</em>
      </h4>
      <p id="author" className="text-end text-light mb-5 me-5 pe-5" >{quoteObject.author}</p>
      <div className="modal-footer">
        <a href={linkString} id="tweet-quote" className="color-primary">
          <i className="fa-brands fa-square-twitter fa-2xl"></i>
        </a>
        <button id="new-quote" className="btn btn-primary mx-auto " onClick={handleNewQuote}>
          {" "}
          New Quote
        </button>
      </div>
    </div>
  );
}
