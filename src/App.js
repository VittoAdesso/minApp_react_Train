import './App.css';
import TodoApp from './components/todoAPP/todoApp';
import WeatherApp from './components/weatherApp/weatherApp';

function App() {
  return (
    <div className="App">
    {/* TODO: Make router links to have spa with projects */}
      <TodoApp></TodoApp>
      <hr></hr>
      <WeatherApp></WeatherApp>
    </div>
  );
}

export default App;
