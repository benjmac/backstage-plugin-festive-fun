import React from 'react';
import Wave from 'react-wavify';
import { useStyles } from '../../styles/styles';

export const SummerVibes = () => {
  const styles = useStyles();

  return (
    <div data-testid="summer" className={styles.summerContainer}>
      <div style={{ flex: 1 }} />
      <Wave mask="url(#mask)" fill="#1277b0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="white" />
            <stop offset="90%" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="100%" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </div>
  );
};
