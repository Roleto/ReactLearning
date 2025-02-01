import Header from "../components/Header/Header.jsx";
import CoreConceptList from "../components/CoreConceptList.jsx";
import Examples from "../components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptList />
        <Examples />
      </main>
    </>
  );
}

export default App;
