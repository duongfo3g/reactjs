import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <a
      className="App-link"
      href="login"
      rel="noopener noreferrer"
    >
    Login
    </a>

    <a
      className="App-link"
      href="register"
      rel="noopener noreferrer"
    >
    Register
    </a>

    <a
      className="App-link"
      href="userlist"
      rel="noopener noreferrer"
    >
    UserList
    </a>

      </header>
    </div>
  );
}

export default Home;