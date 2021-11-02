/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css"


class Home extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
    isLoading :  true ,
    movies : [] //미래에 사용할 데이터를 비워도 상관없음
  };
  getMovies = async() =>{
    const {data:{data:{movies}}} =await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){ //axios로 url안에 있는 데이터를 호출함
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    
    return(
      <section className="container">
        {isLoading ? 
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        : 
          <div className="movies">
                { movies.map(
                  movie=>(
                      <Movie 
                      key={movie.id}
                      id={movie.id} 
                      year={movie.year} 
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                      />
                ))}
          </div>
          }
      </section>
        )
      }
      
    
  }


export default Home;
