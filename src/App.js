import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='hola soy un componente beige' color='beige' />
    </div>
  );
}

export default App;
