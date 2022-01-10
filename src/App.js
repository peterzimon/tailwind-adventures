import './App.css';
import Home from './pages/Home';
import NavBarExample from './pages/NavBarExample';
import NavItem from './components/NavItem';
import Opz from './pages/Opz'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const React = require('react');

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className='flex bg-gray-900 text-white p-1 text-sm'>
                        <NavItem to="/" title="Home" />
                        <NavItem to="/navbar" title="Navbar" />
                        <NavItem to="/opz" title="OP-Z" />
                    </ul>

                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route path="/navbar" element={<NavBarExample />}/>
                        <Route path="/opz" element={<Opz />}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}