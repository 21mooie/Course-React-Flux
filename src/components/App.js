import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}
