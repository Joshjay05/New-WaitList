import { BrowserRouter,Routes,Route } from "react-router-dom";
import Waiting from "./Waiting";
function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
<Route path='/' element={<Waiting/>}/> 
{/* <Route path='faq' element={<Faq} */}
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
