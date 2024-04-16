import { Card } from "react-bootstrap";
const Gallery = ({ post }) => {
const { title, photo, color, description } = post;

  return (
    <Card

      className="text-dark"
    >
      <Card.Img
        variant="top"
        src=""
      />
      <Card.Body>
        <Card.Title>titulo</Card.Title>
        <Card.Text>description</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Gallery;
