import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <Mycomponent></Mycomponent>
      </header>
    </div>
  );
}

export default App;
