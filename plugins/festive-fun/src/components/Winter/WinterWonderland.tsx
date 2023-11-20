import React from 'react';
import Snowfall from 'react-snowfall';
import snowflake1 from '../../assets/snowflake1.png';

const snowflake = document.createElement('img');
snowflake.style.background = 'transparent';
snowflake.src = snowflake1;

const images = [snowflake];

export const WinterWonderland = () => {
  return (
    <div data-testid="winter">
      <Snowfall snowflakeCount={200} images={images} radius={[0.5, 12.0]} />;
    </div>
  );
};
