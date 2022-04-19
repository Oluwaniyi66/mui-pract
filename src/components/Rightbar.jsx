import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function Rightbar() {
  const itemData = [
    {
      img: "https://images.pexels.com/photos/1211604/pexels-photo-1211604.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Breakfast",
    },
    {
      img: "https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300} mt={2} mb={2}>
        <Typography variant="h6" fontWeight="100">
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1211604/pexels-photo-1211604.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/1202367/pexels-photo-1202367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1529351/pexels-photo-1529351.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1486058/pexels-photo-1486058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight="100">
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight="100" mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
