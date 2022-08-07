import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom'
import Modal from './Modal';

function App() {
  return (
    <div className="App">
      <h1>Book-Keeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
