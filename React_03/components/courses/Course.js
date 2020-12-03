import React from 'react'

//  Задание описано размыто, потому решил преподавателей поместисть в внутр. секцию компонента
//и тоглинг вынести в существующий HOC.
//  С отдельным компонентом и HOC логика была бы примерно та же.


const Course = ({ course, toggleId, openId, showSection, toggleSection }) => (
    <div className="mt-3">
        <h3>{course.title}</h3>

        <button onClick={() => toggleId(course._id)} className="btn btn-primary">
            {openId === course._id ? "Hide description" : "Show description"}
        </button>

        {openId === course._id ?
            <div>
                <p>{course.description}</p>
                <button onClick={toggleSection} className="btn btn-sm btn-info">
                    {showSection ? "Hide teachers" : "Show teachers"}
                </button>

                {showSection ? course.teachers.map(teacher => (
                    <div key={teacher._id}>
                        <p> <b>Name:</b> {teacher.name} </p>
                        <p> {teacher.text} </p>
                    </div>
                    )) : null}
            </div> : null}
        <hr />
    </div>
)

export default Course;
