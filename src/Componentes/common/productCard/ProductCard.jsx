import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 300, height: 410, p: 1, m: 1 }}>
      <CardActionArea>
        <CardMedia sx={{ height: 200 }} image={item.img} title={item.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h7" color="text.secondary">
            {item.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {item.price}.-
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" color="primary" variant="contained">
              <Typography color="secondary">Ver</Typography>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
