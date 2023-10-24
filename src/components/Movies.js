import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Movies() {
  const movies = useSelector(selectMovies);
  const navigate = useNavigate();

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="movies" />
              </Link>
            </Wrap>
          ))}

        {/* <Wrap>
          <img
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/Marvel-Movies-Ranked-feature.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/Marvel-Movies-Ranked-feature.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/Marvel-Movies-Ranked-feature.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/07/Marvel-Movies-Ranked-feature.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://stanleymovietheater.com/wp-content/uploads/2020/10/Coco-Family-Poster-Pixar.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://stanleymovietheater.com/wp-content/uploads/2020/10/Coco-Family-Poster-Pixar.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://stanleymovietheater.com/wp-content/uploads/2020/10/Coco-Family-Poster-Pixar.jpg"
            alt="movies"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://stanleymovietheater.com/wp-content/uploads/2020/10/Coco-Family-Poster-Pixar.jpg"
            alt="movies"
          />
        </Wrap> */}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor:pointer;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
  transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow:rgb(0 0 0 / 80%)  0px 40px 58px -16px;
    rgb(0 0 0 / 72%) 0px 30px 22px -10px; 


  }
`;
