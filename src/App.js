import './App.css';
import TodoApp from './components/todoAPP(form&useState)/todoApp';
import InfoWeatherAPP from './components/weatherApp(useEffect&useState)/infoWeatherAPP';
import EmojiPickerInput from './components/emojis(useState&useEffect&useRef)/emojiPicker/emojiPickerInput';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="todoApp" element={<TodoApp/>} />
      <Route path="emojis" element={<EmojiPickerInput/>} />
      <Route path="weather" element={<InfoWeatherAPP/>} />
      </Routes>
    </div>

  );
}

export default App;
