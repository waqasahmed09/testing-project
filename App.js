import Router from './config/router';
import Dashboard from './config/Dashboard';
import Header from './Header/index'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
    <Header/>
      
        
<Dashboard/>
 
    <Router/> 
      </header>
    </div>
  );
}

export default App;
