import './App.css';
import TodoApp from './components/todoAPP(form&useState)/todoApp';
import WeatherApp from './components/weatherApp(useEffect&useState)/weatherApp';
import EmojiPickerInput from './components/emojis(useState&useEffect&useRef)/emojiPicker/emojiPickerInput';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="todoApp" element={<TodoApp/>} />
      <Route path="emojis" element={<EmojiPickerInput/>} />
      <Route path="weather" element={<WeatherApp/>} />
      </Routes>
    </div>

  );
}

export default App;
