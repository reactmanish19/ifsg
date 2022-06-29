import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const ReactQueryStep = () => {
  const [characters, SetCharacters] = useState([]);
  const FetchCharacter = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character"); //https://rickandmortyapi.com/api/character
   return response.json();
  };
  const {isLoading, error,data} =useQuery("characters",FetchCharacter)
  if(isLoading){
    return(
        <div>LOADING...</div>
    )
  }
  if(error){
    return(
    <div>Error Occured :  {error.message}</div>
    )
  }

  return (
    <div>
        {data.results.map((characters) => (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={characters.image}
          alt="Character Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {characters.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           status - {characters.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           species - {characters.species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           location - {characters.location.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      ))}
      
    </div>
  );
};
export default ReactQueryStep;
