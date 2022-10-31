import EvaluationData from './components/EvaluationData';
import AddData from './components/AddData';
import { Routes, Route, useParams } from 'react-router-dom'



function App() {
//const { id } = useParams();

  return (
          <Routes>
            <Route path='*' element={ < AddData /> } />
            <Route path='/:formId' element={ < EvaluationData /> } />
           
          </Routes> 
  );
}

export default App;
