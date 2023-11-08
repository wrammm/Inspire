import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CampingPhoto from '../assets/camping.png'; 

function PictureCard() {
  const authorLink = 'https://en.wikipedia.org/wiki/John_Muir';
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={CampingPhoto} />
      <Card.Body>
        <Card.Title>John Muir</Card.Title>
        <Card.Text>
          <em>"In every walk with nature, one recieves far more than he seeks."</em>
        </Card.Text>
        <Button variant="primary" href={authorLink} target="_blank">More about author</Button>
      </Card.Body>
    </Card>
  );
}

export default PictureCard;
