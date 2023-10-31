import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Button, CardActionArea, CardActions} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DiscountButton from "./discountButtons";
import Stack from "@mui/material/Stack";
import TextRating from "./review";
import theme from "../createTheme";
import priceAfterDiscount from "./priceAfterDiscount";

export default function MultiActionAreaCardList(props) {


    const handleAddToCart = () => {
        props.addToCart(props);
    };
    return (
        <Grid item xs={12} sm={6} md={3} lg={3} key={props.id} sx={{p: 0, width: "25%"}}>
            <Card
                sx={{
                    minWidth: "656px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    p: 2,
                    alignItems: "center",
                    "&:hover": {
                        backgroundColor: "#fff",
                        boxShadow: "0px 4px 8px 0px rgba(92, 107, 192, 0.2), 0px 2px 4px 0px rgba(59, 69, 123, 0.2)",
                        elevation: 1,
                    },
                }}
                elevation={0}
            >

                <CardActionArea>

                    <CardMedia
                        component="img"
                        sx={{
                            height: "224px",
                            width: "227px",
                            objectFit: "cover",
                            mx: "auto", mb: 1.5
                        }}
                        image={props.img}
                    />


                    <CardContent sx={{p: 0, mt: 1.5, mb: 1}}>
                        <Stack direction="column" sx={{p: 0}}>
                            <Typography variant="description" color="grey[100]" sx={{minHeight: "100px"}}>
                                {props.description}
                            </Typography>
                            <Stack sx={{mt: "auto", alignItems: "baseline"}} direction="row"
                                   justifyContent="space-between"
                                   alignItems="center">
                                <Typography variant="price" color="common.black" sx={{my: 1}}>
                                    {priceAfterDiscount(props)} {props.currency.toLowerCase()}
                                </Typography>
                                <DiscountButton content={props.discount}/>
                            </Stack>
                            <Typography variant="caption" color="grey[50]">
                                ${props.shipping.cost} for shipping. {props.shipping.method} shipping method.
                                Delivery {props.shipping.estimatedDelivery}
                            </Typography>
                        </Stack>
                    </CardContent>

                </CardActionArea>
                <Box sx={{width: "100%", display: "flex", direction: "row", justifyContent: "space-between"}}>
                    <CardActions sx={{
                        width: "100%",
                        p: 0,
                        mt: 1
                    }}>
                        <TextRating rate={props.rate}/>
                        <Button
                            sx={{
                                ml: "auto", p: 0, ...theme.typography.button, minWidth: "88px",
                                minHeight: "32px"
                            }}
                            size="small"
                            variant="outlined"
                            color="primary"
                            startIcon={<FavoriteBorderOutlinedIcon sx={{color: "primary.blue60"}}/>}
                            onClick={handleAddToCart}
                        >
                            Watch
                        </Button>

                    </CardActions>
                </Box>
            </Card>
        </Grid>
    );
}
