import "../App.css";
import image from "../assets/react.svg";

function header() {
  return (
    <>
      <header className="upper">
        <div className="topbar">
          <img src={image} width="40px" alt="React logo" />
          <h1 className="logtext">ReactFacts</h1>
        </div>
      </header>
    </>
  );
}

export default header;
