import logo from './logo.svg';
import './App.css';

function App() {
  const h1Style = {
   "fontSize": "30px",
   "color": "#cc0000",
   "textTRansform": "uppercase"
  };
  return (
    <div className="App">
      <h1 style={h1Style}>My React Page</h1>
      <h2>his is my first React page and very excited about the whole process</h2>
    </div>
  );
}

export default App;
