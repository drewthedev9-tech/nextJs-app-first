import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./card.module.css"





export default function Header(props){
const {API_URL} = process.env

    return(
        <>
    
    <Card style={{ width: '18rem', textAlign: 'center' }}>
  <Card.Img variant="top"src="" />
  <Card.Body>
        <img className="movie-poster" src={ API_URL + props.movie.Poster.url}/>
    <Card.Title>{props.movie.title}</Card.Title>
  
    <Button variant="primary">Watch</Button>
  </Card.Body>
</Card>
        </>
    );
} 