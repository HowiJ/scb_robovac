import type { ReactElement } from "react";

import React from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import {
  Assessment,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@mui/icons-material";

type Props = Readonly<{
  onMove: () => void;
  onReport: () => void;
  onTurnLeft: () => void;
  onTurnRight: () => void;
}>;

function Controls({
  onMove,
  onReport,
  onTurnLeft,
  onTurnRight,
}: Props): ReactElement {
  return (
    <Grid container textAlign="center">
      <Grid item sm={12} md={12} xl={12}>
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={onReport}
            size="small"
            startIcon={<Assessment />}
          >
            Report
          </Button>
          <Button color="primary" size="small" onClick={onTurnLeft}>
            <KeyboardArrowLeft fontSize="medium" />
          </Button>
          <Button color="primary" size="small" onClick={onMove}>
            <KeyboardArrowUp fontSize="medium" />
          </Button>
          <Button color="primary" size="small" onClick={onTurnRight}>
            <KeyboardArrowRight fontSize="medium" />
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default Controls;
