import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;
