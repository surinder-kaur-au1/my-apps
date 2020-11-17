
import './App.css';
import Header from './components/header.js'
import Home from './containers/home.js';
import HeaderMain from './components/headerMain.js';
import ContactUs from './containers/contact.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Post from './containers/post';
import AboutUs from './containers/aboutus';
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <HeaderMain/>
      <Route path="/" exact component={Home}/>
      <Route path="/about-us"  component={AboutUs}/>
      <Route path="/contact-us"  component={ContactUs}/>
      <Route path="/post/:postid"  component={Post}/>
      

    </div>
    </Router>
    
  );
}

export default App;
