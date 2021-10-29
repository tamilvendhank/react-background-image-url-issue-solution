import './App.scss';

import SampleComponent from './a/b/c';

import Module from 'module';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SampleComponent />
        <p className="App-logo-2"></p>
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
      </header>
    </div>
  );
}

export default App;