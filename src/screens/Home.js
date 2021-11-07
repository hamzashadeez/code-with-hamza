import React from 'react'
import Course from '../components/Course'
import './home.css'

function Home() {
    return (
        <div className='container'>
            <h4 className='mt-3'>Latest</h4>
            <div className='course_row'>
                {/* New Videos */}
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>

            <h4 className='mt-3'>Episodes</h4>
            <div className='course_row'>
                {/* New Videos */}
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>

            <h4 className='mt-3'>Watched</h4>
            <div className='course_row'>
                {/* New Videos */}
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
        </div>
    )
}

export default Home
