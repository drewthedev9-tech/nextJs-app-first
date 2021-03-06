
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from "next/link"
import "./card.module.css"





export default function Header(props){
const {API_URL} = process.env

    return(
        <>
    <div className="card-container">
        <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img variant="top"src="" />
        <Card.Body>
            <img className="movie-poster" src={ API_URL + props.movie.Poster.url}/>
        <Card.Title>{props.movie.title}</Card.Title>
        <Button variant="primary">Watch</Button>
     
        </Card.Body>
        {/* /movies/[genre]/[slug] will act as the template] */}
        {/* /movies/${props.movie.genre.slug}/${props.movie.slug} will be the actual slugs from API pulled from strapi*/}
        <Link href="/movies/[genre]/[slug]" as={`/movies/${props.movie.genre.slug}/${props.movie.slug}`}>
            <a>More about this movie</a>
        </Link>
        </Card>
    </div>
    
        </>
    );
} 