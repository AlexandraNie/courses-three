import { useState } from 'react';
import { data } from './data';
import './App.css';

function Courses(){
const [courses, setCourses] = useState(data);
const [showMore, setShowMore] = useState (false);

const removeCourse = (id) => {
    let newCourses = courses.filter (course => course.id !==id);
    setCourses(newCourses);
} 
const showMoreClick = (element) => {
    element.showMore = !element.showMore
    setShowMore(!showMore)
}
    

    return(<div>
{courses.map((element => {
        const {id, course, image, description, showMore} = element;

        return(<div key={id}>
          <div className='container one two'>
          
          <h3>{id} . {course}</h3>
          
          
        <img className='img' src={image} width="500px" alt='course'/>
        </div>

        <div className='container one two'>
        <p>{showMore ? description : description.substring(0,180) + "..." }
        <button className='showButton'  onClick={() => showMoreClick(element)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
        </div>
       
     <div className='container one two title'>
      <button className='word'>BOOK NOW</button>


    <button  onClick={() => removeCourse(id)} className='remove'>Remove</button>
    </div>
    </div>
    
        

        )
       }))}
       <div className='container'>
       <button className='word' onClick={() => setCourses([]) }>DELETE ALL</button>

       </div>

    </div>)
}
export default Courses;