import React from 'react';
import { getCourses } from "../api/courseApi";

export default class CoursesPage extends React.Component {

    state = {
        courses: []
    };

    componentDidMount() {
        getCourses().then((courses) => this.setState({courses: courses}));
    }

    render() {
        return <h2>Courses</h2>
    }
}
