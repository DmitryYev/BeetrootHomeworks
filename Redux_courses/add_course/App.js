import React from 'react'
import { Route } from 'react-router-dom'
import { AsyncLoad, lazyLoad } from './AsyncLoad'

const Header = AsyncLoad(lazyLoad('./common/Header'))
const HomePage = AsyncLoad(lazyLoad('./home/HomePage'))
const ManageCoursesPage = AsyncLoad(lazyLoad('./courses/ManageCoursesPage'))
const AboutPage = AsyncLoad(lazyLoad('./about/AboutPage'))
const AddCoursePage = AsyncLoad(lazyLoad('./courses/AddCource'))

const App = props => (
    <div className={'container'}>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route path='/courses' component={ManageCoursesPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/add-course' component={AddCoursePage} />
    </div>
)

export default App
