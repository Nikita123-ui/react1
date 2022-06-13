import './App.scss';
import Button from './components/Shared/Button/Button';

function App() {
  return (
    <div className="App">
      <div>
        <Button variant="primary" size="sm">
          primary button
        </Button>
      </div>
      <div>
        <Button variant="warning" size="md">
          warning button
        </Button>
      </div>
      <div>
        <Button variant="error" size="lg">
          Danger button
        </Button>
      </div>
    </div>
  );
}

export default App;
