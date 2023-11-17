import React, { useState } from 'react';
import { handleFestivityType } from '../../utils';
import { featureFlagsApiRef, useApi } from '@backstage/core-plugin-api';
import { useStyles } from '../../styles/styles';
import { AUTO, Festivity } from '../../types';

export const FestiveFun = ({
  festivity = AUTO,
  initialShowInSeconds = 15,
  festivitySelector,
}: {
  festivity?: Festivity;
  initialShowInSeconds?: number;
  festivitySelector?: () => Festivity;
}) => {
  const styles = useStyles();
  const featureFlags = useApi(featureFlagsApiRef);
  const showFestiveFun = featureFlags.isActive('festive-fun');
  const [showFestivity, setShowFestivity] = useState<boolean>(true);

  if (!showFestiveFun) {
    setTimeout(() => {
      setShowFestivity(false);
    }, initialShowInSeconds * 1000);
  }

  return showFestivity ? (
    <div className={styles.container}>
      {handleFestivityType({ festivity, festivitySelector })}
    </div>
  ) : null;
};
