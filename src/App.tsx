import './App.css';
//import Card from './Components/Card/Card';
import CardList from './Components/CardList/CardList';
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
