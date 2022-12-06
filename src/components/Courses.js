import React, { useState } from 'react'
import coursesData from '../resources/courses.json'
import './Courses.css'

export default function Courses() {
    let [searchText, setSearchText] = useState('')
    let [faculty, setFaculty] = useState('')
    let [year, setYear] = useState('')
    let [semester, setSemester] = useState('')

    return (
        <div className='courses-container card'>
            <h1>What courses have I taken?</h1>
            <Filters 
                searchText={searchText} 
                onSearchTextChanged={setSearchText} 
                faculty={faculty} 
                onFacultyChanged={setFaculty} 
                year={year}
                onYearChanged={setYear}
                semester={semester}
                onSemesterChanged={setSemester}
                courses={coursesData}
            />
            <CourseList courses={coursesData} filters={{ searchText, faculty, year, semester }}/>
        </div>
    )
}

function Filters({ 
    searchText, 
    onSearchTextChanged, 
    faculty, 
    onFacultyChanged, 
    year,
    onYearChanged,
    semester,
    onSemesterChanged,
    courses }) {

    return(
        <div className='filters-section'>
            <div className='input-section'>
                <label htmlFor='search'>Search:</label>
                <input id='search' type='text' value={searchText} onChange={(event) => onSearchTextChanged(event.target.value)}/>
            </div>
            <Selection
                value={faculty}
                selectionKey='faculty'
                defaultText='All Faculties'
                courses={courses}
                handler={onFacultyChanged}
            />
            <Selection
                value={year}
                selectionKey='year'
                defaultText='All Years'
                courses={courses}
                handler={onYearChanged}
            />
            <Selection
                value={semester}
                selectionKey='semester'
                defaultText='All Semesters' 
                courses={courses}
                handler={onSemesterChanged}
            />
            
        </div>
    )
}

function Selection({ value, selectionKey, defaultText, courses, handler }) {
    function filterUniques(values) {
        let x = []
        values.forEach(value => {
            if (!x.includes(value)) x.push(value)
        })
        return x
    }

    return (
        <div className='input-section'>
            <label htmlFor={selectionKey}>{`${selectionKey}:`}</label>
            <select id={selectionKey} value={value} onChange={(event) => handler(event.target.value)}>
                <option key='null' value=''>{defaultText}</option>
                {filterUniques(courses.map(course => course[selectionKey])).map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    )
}

function CourseList({ courses, filters }) {
    function satisfiesFilters(course) {
        if (
            (filters.searchText.length <= 0 ||
            course.name.toLowerCase().includes(filters.searchText.toLowerCase()) ||
            course.faculty.toLowerCase().includes(filters.searchText.toLowerCase()) ||
            course.courseCode.toLowerCase().includes(filters.searchText.toLowerCase()) ||
            course.description.toLowerCase().includes(filters.searchText.toLowerCase())) &&
            (filters.faculty === '' ||
            course.faculty.toLowerCase() === filters.faculty.toLowerCase()) &&
            (filters.year === '' ||
            JSON.stringify(course.year).toLowerCase() === filters.year.toLowerCase()) &&
            (filters.semester === '' ||
            JSON.stringify(course.semester).toLowerCase() === filters.semester.toLowerCase())
        ) {
            return true
        }

        return false
    }

    return (
        <ul className='courses-list'>
            {courses.map(course => {
                if (satisfiesFilters(course)) return <Course key={course.courseCode} course={course}/>
            })}
        </ul>
    )
}

function Course({ course }) {
    return (
        <li className='course-item'>
            <p>{`${course.courseCode} - ${course.name}`}</p>
            <div className='divider-item'/>
            <p>{course.description}</p>
            <p>{`Faculty: ${course.faculty}`}</p>
            <p>{`Year ${course.year}, Semester ${course.semester}`}</p>
        </li>
    )
}