// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Productslist from './Productslist';

function App() {
  
  function changeMe(myname){
    console.log("Button Clicked by " + myname);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Productslist/> 
      <button className='button' onClick={()=>{
        changeMe("Uday Kiran")
      }}> Click Here</button>

    </div>
  );
}

export default App;
