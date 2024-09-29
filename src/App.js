import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Counter from "./components/counter/Counter";
import Form from "./components/form/Form";
function App() {
  // const msg ="text using props"
  return (
    <div className="App">
      {/* <Header data={msg}/>
      <Footer/> */}
      {/* <Counter/> */}
      <Form/>
    </div>
  );
}

export default App;
