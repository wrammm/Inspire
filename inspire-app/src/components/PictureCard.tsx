import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type Props = {
  quote?: string;
  author?: string;
  paintThePicture?: string;
  authorLink?: string;
  pictureLink?: string;
};
const PictureCard: React.FC<Props> = ({
  quote,
  author,
  paintThePicture,
  authorLink,
  pictureLink
}) => {
  return (
    <Card style={{ width: "33rem" }}>
      <Card.Img variant="top" src={pictureLink} />
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>
          <em>"{quote}"</em>
          <br />
          <br />
          <div>{paintThePicture}</div>
        </Card.Text>
        <Button variant="primary" href={authorLink} target="_blank">
          More about author
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PictureCard;
