import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Counter from "./pages/counter";
import Form from "./components/form/Form";
import Map from "./components/Map";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import UseReducer from "./hooks/UseReducer";
import UseMemo from "./hooks/UseMemo";

export const Usercontext = createContext();

function App() {
  const [user, setUser] = useState("user 1");
  const [number, setNumber] = useState(0);
  const [otherState, setOtherState] = useState(false);
  const handleUser = (count) => {
    console.log(count);
    setUser(`user ${count}`);
  };

  // const msg ="text using props"
  return (
    <div className="App">
      {/* <Header data={msg}/>
      <Footer/> */}
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <Routes>
        <Route path="/form" element={<Form/>} />
      </Routes> */}
      {/* <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/home/form" element={<Form/>} />
        </Route>
      </Routes> */}
      {/* <Usercontext.Provider value={{ user, handleUser }}>
        <Map/>
      </Usercontext.Provider> */}
      {/* <UseReducer/> */}
      {/* <UseMemo number={number}/>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setOtherState(!otherState)}>
        ChangeOtherState
      </button> */}
      <Counter />
    </div>
  );
}

export default App;
