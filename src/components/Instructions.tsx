import type { ReactElement } from "react";

import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  Assessment,
  HighlightAlt,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@mui/icons-material";

function Instructions(): ReactElement {
  return (
    <Card>
      <CardHeader title="Instructions" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HighlightAlt />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              Place the Robot down by clicking a cell and then selecting a
              direction
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <KeyboardArrowLeft />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Left will turn the Robot left</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <KeyboardArrowUp />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              Up will move it forward in the direction it's facing.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <KeyboardArrowRight />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Right will turn the Robot right</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Assessment />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              Report will show you the current details of the Robot (x, y,
              direction)
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Instructions;
