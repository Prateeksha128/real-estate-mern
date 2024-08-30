import ListPage from "./routes/listpage/ListPage";
import Homepage from "./routes/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlepage/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/list' element={<ListPage />} />
          <Route path='/:id' element={<SinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
