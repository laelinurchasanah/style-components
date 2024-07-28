import StyledCard from './styles/Card.styled';
import { Image } from './styles/Header.styled';
import Button from './styles/Button.styled';

const Card = ({ id, title, subtitle, body, image }) => {
  return (
    <StyledCard odd={id % 2 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{body}</p>
        <Button color="rgb(255, 170, 0)">Read More</Button>
      </div>
      <div>
        <Image src={`./images/${image}`} />
      </div>
    </StyledCard>
  );
};

export default Card;
