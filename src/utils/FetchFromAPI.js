import axios from "axios";
import { apiKey } from "./constants";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// const options = {
//     method: 'GET',
//     url: 'https://youtube-v31.p.rapidapi.com/captions',
//     params: {
//       part: 'snippet',
//       videoId: 'M7FIvfx5J10'
//     },
//     headers: {
//       'X-RapidAPI-Key': '082cb35ffamsh220d55fa2b9a5cbp17a68ejsn3da0cec09379',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };
