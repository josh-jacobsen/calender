import React, {useState} from 'react';
import Calendar from 'react-calendar';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'react-calendar/dist/Calendar.css';
import './App.scss';

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
    </div>
  );
}

export default App;
