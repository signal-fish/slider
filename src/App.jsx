import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import Slider from "./components/Slider";
import data from "./data";
import { mobile, tabletPro } from "./responsive";

const App = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  const nextSlide = useCallback(() => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  }, [people]);

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index, nextSlide])

  return (
    <Container>
      <Wrapper>
        <Slider people={people} index={index} prevSlide={prevSlide} nextSlide={nextSlide} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 60%;
  height: 500px;

  ${tabletPro({
    width: "80%",
  })}

  ${mobile({
    width: "100%",
    height: "100%",
    margin: "10px"
  })}
`;

export default App;
