import AppBar from "./components/AppBar";
import Message from "./components/PictureCard";
import quotes from "./data/quoteData.json";
import "./App.css";

function App() {
  console.log("quotes: ", quotes.quotes);
  let quotesArray = quotes.quotes;
  return (
    <div>
      <AppBar />
      <div className="card-container">
        {quotesArray.map((quote, index) => {
          console.log("Entered: ", quote, index);
          // Return the element. Also pass key
          //  return (<Answer key={answer} answer={answer} />)
          return (
            <Message
              key={index}
              quote={quote.quote}
              author={quote.author}
              paintThePicture={quote.paintThePicture}
              authorLink={quote.authorLink}
              pictureLink={quote.pictureLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
