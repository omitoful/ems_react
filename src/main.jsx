import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainPage from "./views/MainPage";
import Layout from "./layouts/Layout";
import NoticeBoardPage from "./views/NoticeBoardPage";
import ErrorPage from "./views/ErrorPage";
import CalendarPage from "./views/CalendarPage";
import ReservationPage from "./views/ReservationPage";
import ValuePage from "./views/ValuePage";
import WorkPage from "./views/WorkPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<MainPage />} errorElement={<ErrorPage />} />
      <Route path="notice_board" element={<NoticeBoardPage />} />
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="reservation" element={<ReservationPage />} />
      <Route path="work" element={<WorkPage />} />
      <Route path="value" element={<ValuePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
