import React from 'react'
import Categories from '../component/courses/Categories'
import Courses from '../component/courses/Courses'
import CoursesContent from '../component/courses/CoursesContent'
import Features from './Features'
import Hero from './Hero'
import TransForm from './TransForm'

const Home = () => {
  return (
    <div>

      <Hero></Hero>
      <CoursesContent></CoursesContent>
      <Categories></Categories>

      <TransForm></TransForm>
      <Features></Features>
    </div>
  )
}

export default Home