import Form from './components/Form';
import {useState, useEffect } from 'react'
import axios from 'axios';
import Question from './components/Question';

function App() {

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/forms").then(
    res=> res.json()
  ).then(
    data=> console.log(data)
  )
}, [])

// const [data, setData] = useState({ hits: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "http://127.0.0.1:8000/api/forms",
//       );

//       setData(result.data);
//     };

//     fetchData();
//   }, []);


  return (
    <div className="App">
      <Form  />
      {/* <Question  /> */}
    </div>
  );
}

export default App;
