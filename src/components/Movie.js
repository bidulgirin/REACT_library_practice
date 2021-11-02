import React from "react"
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, year, title, summary, poster, genres}){
    return(
        <Link to={{
            pathname:`/movie/:${id}`,
            state:{
                year, //year:year, 과 같다
                title,
                summary,
                poster,
                genres
            }
        }}>
           <div className="movie">
               
                <img src={poster} alt={title}></img>
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <ul className="genres">
                        {genres.map((genre, index)=><li key={index} className="genres__genre">{genre}</li>)}
                    </ul>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__summary">{summary.slice(0,180)}</p>
                   
                </div>
           </div>
        </Link>
    )
}

Movie.propTypes={ //데이터를 가져오는 역할을 하는구나
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired // props에 arrasy를 추가시키기 위한것이다
    
 

}

export default Movie;