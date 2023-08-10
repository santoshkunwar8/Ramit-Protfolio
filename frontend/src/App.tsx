import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home"
import { AppWrapper } from "./App.styles";
// import 
function App() {


  return (
    <>
    <AppWrapper>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </AppWrapper>

    </>
  )
}

export default App
