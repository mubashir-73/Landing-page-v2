import "./App.css";
import Head from "./components/header.jsx";
import Foot from "./components/footer.jsx";

function App() {
  return (
    <div className="context">
      <Head />
      <main>
        <h1 className="funfacts">Fun facts about React</h1>
        <ul className="fact">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
      <Foot />
    </div>
  );
}

export default App;
