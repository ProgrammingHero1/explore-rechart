import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import MyAreaChart from './components/MyAreaChart/MyAreaChart';

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
    </div>
  );
}

export default App;
