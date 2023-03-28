import type { ReactElement } from "react";

import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Button, ButtonGroup } from "@mui/material";
import {
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
  onReport,
  onMove,
  onTurnLeft,
  onTurnRight,
}: Props): ReactElement {
  return (
    <div className={css(styles.controls)}>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={onReport}
          size="small"
        >
          Report
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onTurnLeft}
        >
          <KeyboardArrowLeft fontSize="medium" />
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onMove}
        >
          <KeyboardArrowUp fontSize="medium" />
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onTurnRight}
        >
          <KeyboardArrowRight fontSize="medium" />
        </Button>
      </ButtonGroup>
    </div>
  );
}

const styles = StyleSheet.create({
  controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",
  },
  controlButton: {
    height: "37px",
    width: "37px",
    padding: "0px",
    backgroundColor: "#1976d2",
    border: "0",
    borderRadius: "4px",
    color: "white",
    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2)",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  buttonIcon: {
    // width: "29px",
    height: "29px",
  },
});

export default Controls;
