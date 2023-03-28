import type { ReactElement } from "react";
import type Position from "./Position";

import React from "react";
import { CardHeader, Card, CardContent, Typography } from "@mui/material";

type Props = Readonly<{
  position: Position | null;
}>;

function Report({ position }: Props): ReactElement | null {
  if (position === null) {
    return null;
  }

  return (
    <Card>
      <CardHeader title="Report" />
      <CardContent>
        <Typography>Direction: {position.direction}</Typography>
        <Typography>x: {position.x}</Typography>
        <Typography>y: {position.y}</Typography>
      </CardContent>
    </Card>
  );
}

export default Report;
