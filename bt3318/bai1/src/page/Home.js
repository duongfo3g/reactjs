import logo from '../logo.svg';
import '../App.css';

function Home() {
  return (
    <div className="App">
    	<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<a
        		className="App-link"
        		href="register"
        		rel="noopener noreferrer"
        	>
        	Register
        	</a>

        	<a
        		className="App-link"
        		href="info"
        		rel="noopener noreferrer"
        	>
          	Info
        	</a>
       </header>
	);

}

export default Home;