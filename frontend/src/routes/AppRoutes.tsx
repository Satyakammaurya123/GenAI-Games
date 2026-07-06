import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Snake from "../pages/Snake/Snake";
import CarRacing from "../pages/CarRacing/CarRacing";
import BubbleBlast from "../pages/BubbleBlast/BubbleBlast";
import LoveGame from "../pages/LoveGame/LoveGame";
import RoastMe from "../pages/RoastMe/RoastMe";
import Donate from "../pages/Donate/Donate";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/snake" element={<Snake />} />

          <Route
            path="/car-racing"
            element={<CarRacing />}
          />

          <Route
            path="/bubble-blast"
            element={<BubbleBlast />}
          />

          <Route
            path="/love-game"
            element={<LoveGame />}
          />

          <Route
            path="/roast-me"
            element={<RoastMe />}
          />

          <Route
            path="/donate"
            element={<Donate />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;