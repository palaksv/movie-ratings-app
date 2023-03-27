import { List, ListItem, Typography ,styled } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const Banner=styled('img')({
    width:47
})


const Container=styled(List)`
display:flex;

`

const MoviesList=({movies})=>{
    return(
      <>
         {

            movies.map(movie=>(
               
                    <Container>
                         <ListItem>
                            <Banner src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />

                         </ListItem>
                         <ListItem>
                            <Typography>{movie.original_title} </Typography>
                         </ListItem>
                         <ListItem>
                            <StarIcon color="warning" />
                            <Typography>{movie.vote_average}</Typography>
                         </ListItem>
                         <ListItem>
                            <Typography>{movie.release_date}</Typography>
                         </ListItem>
                    </Container>
                
            ))
         }
      </>
    )
}


export default MoviesList;