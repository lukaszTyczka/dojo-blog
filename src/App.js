import './App.css';
import Navbar from './Navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
    // const title = 'Welcome to the new blog';
    // const likes = 50;
    // const person = { name: 'Luke', age: 30 };
    // const link = 'http://www.google.com';
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
