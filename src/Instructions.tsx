import type { ReactElement } from "react";

import React from "react";
import { CardHeader, Card, CardContent, Typography } from "@mui/material"; // Grid version 1

function Instructions(_: Readonly<{}>): ReactElement {
  return (
    <>
      <Card>
        <CardHeader title="Instructions" />
        <CardContent sx={{ alignItems: "flex-start" }}>
          <Typography align="left" variant="body1">
            Click on the arrows to move the robovac.
          </Typography>
          <Typography align="left" variant="body1">
            Left ( &lt; ) and right ( &gt; ) will turn the vacuum
          </Typography>
          <Typography align="left" variant="body1">
            Up ( ^ ) will move it forward in the direction it's facing.
          </Typography>
          <Typography align="left" variant="body1">
            Report will show you the current details of the vacuum
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Instructions;
