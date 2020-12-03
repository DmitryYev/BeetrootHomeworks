import React  from 'react'
import Course from './Course';
import withToggle from '../../hoc/withToggle';

const CoursesList = ({ courses, ...rest }) => {
    return (
        <div>
            {courses.map(course => (
                <Course key={course._id} course={course} {...rest} />
            ))}
        </div>
    )
}

export default withToggle(CoursesList);
