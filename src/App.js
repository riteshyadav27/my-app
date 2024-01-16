import './App.css';
import Navbar from './Components/Navbar.js'
import Textform from './Components/Textform.js'

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
      <Textform text="Enter the text here"/>
      </div>
    </>
  );
}

export default App;
