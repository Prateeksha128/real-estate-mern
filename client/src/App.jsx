import ListPage from "./routes/listpage/ListPage";
import Homepage from "./routes/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlepage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/list' element={<ListPage />} />
          <Route path='/:id' element={<SinglePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
