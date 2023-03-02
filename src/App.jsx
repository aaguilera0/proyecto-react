import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar className="nav-bar"/>
      <ItemListContainer greeting={"Hola Mundo"}/>
    </div>
  );
}


export default App; 

