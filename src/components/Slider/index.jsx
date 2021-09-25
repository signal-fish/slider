import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { mobile } from "../../responsive";
import people from "../../data";

const Slider = ({ people, index, prevSlide, nextSlide }) => {
  return (
    <Container>
      <Left>
        <Button onClick={() => prevSlide()}>
          prev
        </Button>
      </Left>
      <Center>
        {people.map((person, personIndex) => {
          const { id, image, name, title, desc } = person;
          return (
            <CenterWrapper
              index={index}
              personIndex={personIndex}
              people={people}
              key={id}
            >
              <ImageWrapper>
                <Image src={image} alt={name} />
              </ImageWrapper>
              <Name>{name}</Name>
              <JobTitle>
                <Span>{title}</Span>
              </JobTitle>
              <DescriptionWrapper>
                <Text>{desc}</Text>
              </DescriptionWrapper>
            </CenterWrapper>
          );
        })}
      </Center>
      <Right>
        <Button onClick={() => nextSlide()}>
          next
        </Button>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Left = styled.div`
flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
`;

const Button = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  background: #7bcce7;
  font-size: 16px;
  font-weight: 600;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }


`;

const Center = styled.div`
  flex: 8;
  display: flex;
  overflow: hidden;
  position: relative;

  ${mobile({
    alignItems: "center"
  })}
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  transition: all .5s linear;
  opacity: 0;
  position: absolute;

  transform: ${(props) =>
    props.personIndex === props.index
      ? "translateX(0)"
      : props.personIndex === props.index - 1 
      ? "translateX(-100%)"
      : (props.index === 0 && props.personIndex === people.length - 1)
      ? "translateX(-100%)"
      : "translateX(100%)"};

  opacity: ${(props) => props.personIndex === props.index && "1"};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid lightblue;
  margin: 30px 0 10px 0;

  ${mobile({
    width: "130px",
    height: "130px",
    margin: "5px 0"
  })}
`;

const Name = styled.p`
  margin: 10px 0;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  font-weight: 700;

  ${mobile({
    fontSize: "20px",
  })}
`;

const JobTitle = styled.p`
  margin: 0;
  text-transform: capitalize;
  font-size: 20px;
  text-align: center;
  

  ${mobile({
    fontSize: "18px",
  })}
`;

const Span = styled.span`
padding: 2px 10px;
  background: #7bcce7;
  border-radius: 5px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 20px;
  font-size: 18px;

  ${mobile({
    fontSize: "14px",
  })}
`;

const Right = styled.div`
flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 700;  
`;
export default Slider;
