import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from '../MovieState'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const MovieDetails = () => {
  const location = useLocation();
  const url = location.pathname
  const [movies, setMovies] = useState(MovieState)
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
    setMovie(currentMovie[0])
  }, [movies, url])
  return (
    <>
    {movie && ( 
    <Details  exit='exit' variants={pageAnimation} initial="hidden" animate="show" >
      <HeadLine>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt="movie" />
      </HeadLine>
      <Awards>
        {movie.awards.map((award) => (
          <Award title={award.title} description={award.description} key={award.title}/>
        ))}
      </Awards>
      <ImageDisplay>
        <img src={movie.secondaryImg} alt="" />
      </ImageDisplay>
    </Details>
    )}
    </>
  )
}
const Details = styled(motion.div)`
  color:white;
`
const HeadLine = styled.div`
  min-height:90vh;
  padding-top: 20vh;
  position: relative;
  h2{
   position:absolute;
   top: 5%;
   left: 50%;
   transform: translate(-50%, -10%)
  }
  img {
   width: 100%;
   height: 70vh;
   object-fit:cover;
  }
`
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem ;
  align-items: centar;
  justify-content: space-around;
`
const AwardStyle = styled.div`
  h3{
   font-size: 1.5rem
  }
  p{
  width: 300px;
  text-align:centar
  }
  .line{
  width: 100%;
  background: #23d997;
  height: 0.5rem;
  margin: 1rem 0rem;
  }
`
const ImageDisplay = styled.div`
  min-height: 50vh;
  img{
   width: 100%;
   height: 100vh;
   object-fit: cover;
  }
`
//NewComponent
const Award = ({title, description}) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  )
}
export default MovieDetails