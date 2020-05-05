import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
