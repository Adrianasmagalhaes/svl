import logo from './logo.svg';
import './App.css';
import { FormBook } from './Components/FormBook';
import { NavBar } from './Components/NavBar';
import BookTable from './Components/BokTable';

function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <FormBook />
        <BookTable/>
      </div>
    </div>
  );
}

export default App;
