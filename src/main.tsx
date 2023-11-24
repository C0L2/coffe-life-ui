import React from "react";
import ReactDOM from "react-dom/client";
import Registration from "./pages/Registration.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.tsx";
import Menu from "./pages/Menu.tsx";
import AskQuestion from "./pages/AskQuestion.tsx";
import MeetFriends from "./pages/MeetFriends.tsx";
import TakeQuiz from "./pages/TakeQuiz.tsx";
import MyNumber from "./pages/MyNumber.tsx";
import Location from "./pages/Location.tsx";
import QuizResponse from "./pages/QuizResponse.tsx";
import AdminWelcome from "./pages/admin-Welcome.tsx";
import AdminMenu from "./pages/admin-Menu.tsx";
import AdminMeets from "./pages/admin-Meets.tsx";
import AdminQuiz from "./pages/admin-Quiz.tsx";
import AdminQuestions from "./pages/admin-Questions.tsx";
import { Provider } from "react-redux";
import { store } from "./api.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Registration />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="menu" element={<Menu />} />

            <Route path="ask-question" element={<AskQuestion />} />
            <Route path="meet-a-friend" element={<MeetFriends />} />
            <Route path="take-a-quiz" element={<TakeQuiz />} />
            <Route path="my-number" element={<MyNumber />} />
            <Route path="location" element={<Location />} />
            <Route path="qz-response" element={<QuizResponse />} />

            <Route path="admin-welcome" element={<AdminWelcome />} />
            <Route path="admin-menu" element={<AdminMenu />} />
            <Route path="admin-meets" element={<AdminMeets />} />
            <Route path="admin-quiz" element={<AdminQuiz />} />
            <Route path="admin-qa" element={<AdminQuestions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
