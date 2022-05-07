import Header from './components/header';
import Table from './components/table';
import MSnap from './components/marketSnap';

function App() {
  return (
    <div className="App">
      <Header />
      <MSnap/>
      <div className="content">
        <Table/>
      </div>
    </div>
  );
}

export default App;
