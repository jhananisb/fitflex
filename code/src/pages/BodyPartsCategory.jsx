import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Categories.css'
import exerciseImages from '../utils/exerciseImages';

const BodyPartsCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [exercises, setExercises] = useState([])

  useEffect(() => {
    if (id) {
      fetchData(id)
    }
  }, [id]) // <-- include id in deps

  const fetchData = async (id) => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${id}`,
      params: {limit: '200'},
      headers: {
        'X-RapidAPI-Key':  'cb14890a12msh6b9a830acdc1028p198b4ejsn939a8c633526',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='category-exercises-page' >
      <h1>category: <span>{id}</span></h1>

      {exercises && exercises.length > 0 ?
        <div className="exercises">
          {exercises.map((exercise, index) => {
            console.log("API:", exercise.name, exercise.gifUrl)

            // <-- MOVE: declare imgSrc here (inside map callback, before the JSX return)
            const imgSrc = exerciseImages[exercise.name.toLowerCase()] ||
                           '/assets/exercises/placeholder.png';

            return (
              <div
                className="exercise"
                key={exercise.id || index} // use unique id when available
                onClick={() => navigate(`/exercise/${exercise.id}`)}
              >
                <img src={imgSrc} alt={exercise.name} />
                <h3>{exercise.name}</h3>
                <ul>
                  <li>{exercise.target}</li>
                  {exercise.secondaryMuscles?.slice(0, 2).map((muscle) => (
                    <li key={muscle}>{muscle}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      : ""}
    </div>
  )
}

export default BodyPartsCategory