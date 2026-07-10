import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TradeRegister from "./pages/TradeRegister/TradeRegister";
import DealRegister from "./pages/DealRegister/CompanyInfoFormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/trade-register" element={<TradeRegister />}></Route>
      <Route path="/deal-register" element={<DealRegister />}></Route>
    </Routes>
  );
}

export default App;
