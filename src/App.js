import './App.css';
import TodoApp from './components/todoAPP/todoApp';
// import WeatherApp from './components/weatherApp/weatherApp';
import EmojiPickerInput from './components/emojis/emojiPicker/emojiPickerInput';



function App() {
  return (
    <div className="App">
   
      <TodoApp></TodoApp>
      <hr></hr>
      {/* <WeatherApp></WeatherApp> */}
      <EmojiPickerInput/>
    </div>
  );
}

export default App;
