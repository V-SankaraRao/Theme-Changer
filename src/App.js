
import useLocalStorage from './useLocalStorage';
import './App.css';

function App() {
  const[theme,setTheme]=useLocalStorage('theme','light'); // here we are passing 1 st param as name to store data in local storage
  // here setTheme function will calls the state function which is present in useLocalStorage hook i.e 'setVlaue'.

  function handleMode(){
  setTheme(theme==='dark'?'light':'dark');  // handling toggle feature; here setTheme function will cause to re render the useLocalStorage custome hook(function)
  }
  return (
    <div className="App" data-theme={theme}> 
      
      <h1>Theme is {theme}</h1>
      <button onClick={handleMode}>Change Theme</button>
    </div>
  );
}

export default App;
