/** @format */

import type { ReactElement } from 'react';

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Button } from '@mui/material';
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from '@mui/icons-material';

type Props = Readonly<{}>;

function Controls(_: Props): ReactElement {
  return (
    <div className={css(styles.controls)}>
      <div>
        <Button variant='contained' color='primary'>
          Report
        </Button>
      </div>
      <div className={css(styles.keyboard)}>
        <div className={css(styles.row)}>
          <div className={css(styles.controlButton)} />
          <button className={css(styles.controlButton)}>
            <KeyboardArrowUp fontSize='large' className={css(styles.icon)} />
          </button>
          <div className={css(styles.controlButton)} />
        </div>
        <div className={css(styles.row)}>
          <button className={css(styles.controlButton)}>
            <KeyboardArrowLeft fontSize='large' className={css(styles.icon)} />
          </button>
          <button className={css(styles.controlButton)}>
            <KeyboardArrowDown fontSize='large' className={css(styles.icon)} />
          </button>
          <button className={css(styles.controlButton)}>
            <KeyboardArrowRight fontSize='large' className={css(styles.icon)} />
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '12px',
  },
  keyboard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2px',
  },
  controlButton: {
    height: '30px',
    width: '30px',
    padding: '0px',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default Controls;
