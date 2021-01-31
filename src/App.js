import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import NavigateNext from '@material-ui/icons/NavigateNext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<NavigateNext />}
        >
          Hello
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
