import type { ReactElement } from "react";
import type Position from "../lib/Position";

import React from "react";
import {
  CardHeader,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import { Assessment, Close } from "@mui/icons-material";

type Props = Readonly<{
  position: Position | null;
  onHide: () => void;
}>;

function Report({ position, onHide }: Props): ReactElement | null {
  if (position === null) {
    return null;
  }

  return (
    <Card>
      <CardHeader
        title="Last Report"
        avatar={
          <Avatar>
            <Assessment />
          </Avatar>
        }
        action={
          <IconButton onClick={onHide}>
            <Close />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container>
          <Grid item sm={4} textAlign="center">
            <Stack>
              <Typography variant="caption">Direction</Typography>
              <Typography>{position.direction}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Stack>
              <Typography variant="caption">X</Typography>
              <Typography>{position.x}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} textAlign="center">
            <Stack>
              <Typography variant="caption">Y</Typography>
              <Typography>{position.y}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Report;
