import './App.css';
import Navbar from './Navbar';
import Home from './home';

function App() {
    // const title = 'Welcome to the new blog';
    // const likes = 50;
    // const person = { name: 'Luke', age: 30 };
    // const link = 'http://www.google.com';
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
