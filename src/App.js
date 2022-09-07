import logo from './logo.svg';
import './App.css';
import ImportExport from './Components/ImportExport';
import { anotherVar, anotherVar1, AnotherImportExport} from './Components/ImportExport';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <ImportExport />
      {anotherVar}
      {anotherVar1}
      {AnotherImportExport()}
    </div>
  );
}

export default App;
