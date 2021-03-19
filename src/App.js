import "./App.css";
import Header from "./components/Header/Header";
import Forecast from "./components/Forecast/Forecast";
import NonProfits from "./components/NonProfits/NonProfits";

function App() {
  // componentDidMount() {
  //   fetch('localhost:8080/nonprofits/city?city=')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ nonprofits: data })
  //   })
  //   .catch(console.log)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Find Help Now</h2>
      <p>Connecting people in need with people who can help.</p>
      </header>
      <Header/>
      <main>
        <Forecast />{" "}
      </main>
      <footer>Page created by TEAM Sawyer, Wade, Shawn, Steve, Scott!!</footer>
    </div>
  );
}

export default App;
//notes here
