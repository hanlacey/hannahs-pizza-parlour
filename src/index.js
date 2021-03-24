// ES6 import - alternative module system to require / module.exports (CommonJS)
// equivalent to const ReactDom = require('react-dom');
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Components
// Section of our website
// 2 types of component - functional or class based
// Conventions - Start with a capital letter
// Rendered with self closing tags

ReactDOM.render(<App />, document.getElementById('root'));
