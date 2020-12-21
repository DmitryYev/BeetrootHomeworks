import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import { createCourseAction } from '../../ac/coursesAction'
import {createAuthorAction} from '../../ac/authorAction'

const AddCourse = ({createAuthorAction, createCourseAction, authors }) => {
    const [redirect, setRedirect] = useState(false)
    const { register, handleSubmit, errors } = useForm()


    const onSubmit = (data, e) => {
        e.preventDefault()
        const author = authors.find((author) => author.name === data.author)
        let outputData = {}
        debugger

        if (author) {
            outputData = {
                title: data.title,
                slug: data.title.trim().replace(/\s/g, '-'),
                authorId: author.id,
                category: data.category
            }
            createCourseAction(outputData)
            debugger
        } else {
            outputData = {
                title: data.title,
                slug: data.title.trim().replace(/\s/g, '-'),
                authorId: authors.length + 1,
                category: data.category
            }
            createCourseAction(outputData)
            createAuthorAction({ id: authors.length + 1, name: data.author })
            debugger
        }

        setRedirect(true)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 col-md-5'>
            { redirect && <Redirect to='/courses' />}
            <div className='mt-1 form-group'>
                <label htmlFor="title">Course title</label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    className='form-control'
                    ref={register({ required: true })}
                />
                {errors.title && 'Title is required'}
                <div className='mt-3 form-group'>
                    <label htmlFor="author">Author name</label>
                    <input
                        name='author'
                        type="text"
                        id='title'
                        className="form-control"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.author && 'Author name is requiered'}
                <div className='mt-1 form-group'>
                    <label htmlFor="category">Category</label>
                    <input
                        name='category'
                        type="text"
                        id='title'
                        className="form-control"
                        ref={register({ required: true })}
                    />
                </div>
                {errors.category && 'Category is requiered'}
            </div>
            <div className="form-group">
                <button className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    const { authors } = state;
    return {
        authors
    }
}

export default connect(mapStateToProps, {createAuthorAction, createCourseAction })(AddCourse)