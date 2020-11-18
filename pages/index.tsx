import Header from "../components/header"
import axios from "axios";
import Card from "../components/card"

const Home=(props)=> {

  console.log(props.movies)
  return (
    <div className="container">
      
      {props.movies.map(movie=>(
        <div>
          <Card
          key={movie.id}
          movie={movie}
          />
       
        </div>
      ))}
      </div>
  )
}


export async function getServerSideProps(){
  // using dotenv and getting the url from env file.
  const {API_URL} = process.env

  const response = await axios.get(`${API_URL}/movies`)
  
 

  return {
    props: {
        movies: response.data
    }
}

}

export default Home