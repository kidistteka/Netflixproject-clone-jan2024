import React, {useEffect, useState} from 'react'
import axios from "../../utils/axios"
import request from "../../utils/requests"
import requests from '../../utils/requests';

function Banner() {
    const [movie, setMovie] = useState({});
    useEffect(() => {
      async function fetchData() {
       try {
             const request = await axios.get(requests.fetchNetflixOriginals);
             console.log(request)
              setMovie( request.data.results[
            Math.floor(Math.random() * request.data.results.length)
           ]);
        } catch (error) {
        console.log('error', error);
        }
    }
  }), ([]);

  return (
    <div>
         className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"),
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    
      <div className="banner_contents">
           <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
           </h1>
          <div className="banner_buttons">
             <button className="banner_button play">Play</button>
             <button className="banner_button">My List</button>
          </div>
           {/* <h1 className="banner_description">
          {movie?.overview ? movie.overview.slice(0, 150) + '...' : ''}
          </h1> */}
      </div>
      <div className="banner_fadeBottom" />
      
    </div>
  )
}

export default Banner
