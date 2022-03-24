import logo from './logo.svg';
import './App.css';
import cat from './murica.jpg'

function App() {
  return (
    <div className="App">
      <header className="header">
        <p class = "myPol">myPolitician</p>
        <p class = "beginning">
          Welcome!
        </p>
        <p>
          Please enter your name:
        </p>
        <form className="textbox">
          <input id="text" type="text"></input><br></br>
        </form>
        <button type="button">Submit!</button>
      </header>
      <body>
      <img src={cat} alt="bruh" className="cat"></img>
      </body>
    </div>
  );
}
//var x = document.getElementById("text").value;
//window.print(x);
//<img src={cat} alt="bruh" width="100" height="100" className="cat"></img>

export default App;
