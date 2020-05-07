import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    // Hey dispatcher tell all stores that course was created
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    // Hey dispatcher tell all stores that we got initial courses
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses,
    });
  });
}

export function deleteCourse(courseId) {
  return courseApi.deleteCourse(courseId).then(() => {
    // Hey dispatcher tell all stores that we got initial courses
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: courseId,
    });
  });
}
