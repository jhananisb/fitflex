// src/api/exerciseApi.js
import axios from 'axios';

let exercisesCache = null;

export const fetchAllExercises = async () => {
  if (exercisesCache) return exercisesCache;

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };

  const res = await axios.request(options);
  exercisesCache = Array.isArray(res.data) ? res.data : [];
  return exercisesCache;
};