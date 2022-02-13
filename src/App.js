import './App.css';
import React, {useState, useEffect} from 'react';


function App() {


  const [title, setTitle] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    if(title.length === 2){
      const handle = setTimeout(() => {
        fetch(`https://corona-api.com/countries/${title}`)
        .then(res => res.json())
        .then(res => setData(res.data))
      }, 2000)
      return () => {
        clearTimeout(handle);
      }
    }
  }, [title]);


  let confirmed = '';
  let name = '';

  if(data !== undefined){
    confirmed = data.latest_data.confirmed;
    name = data.name
  }
  
  return (
    <div className="App">
      <input 
        type='text'
        value={title}
        onChange={evt => {
          setTitle(evt.target.value);
        }}
      />
      <h1>{name} {confirmed}</h1>
    </div>
  );
}

export default App;