import "./App.css";

// components
import Form from "./components/Form";
import Results from "./components/Steptwo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Form />
      </div>
      <div>
        <Steptwo />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
