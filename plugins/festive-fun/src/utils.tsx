import React from 'react';
import { FestiveFall } from './components/Fall';
import { WinterWonderland } from './components/Winter';
import { AUTO, SPRING, SUMMER, FALL, WINTER, Festivity } from './types';
import { SoothingSpring } from './components/Spring';
import { SummerVibes } from './components/Summer';

export const defaultFestivitySelector = (): Festivity => {
  const month = new Date().getMonth() + 1;

  if (month >= 3 && month <= 5) {
    return SPRING;
  } else if (month >= 6 && month <= 8) {
    return SUMMER;
  } else if (month >= 9 && month <= 11) {
    return FALL;
  }

  return WINTER;
};

export const handleFestivityType = ({
  festivity,
  festivitySelector,
}: {
  festivity: Festivity;
  festivitySelector: (() => Festivity) | undefined;
}) => {
  const getFestivity = festivitySelector || defaultFestivitySelector;
  const selectedFestivity = festivity === AUTO ? getFestivity() : festivity;

  switch (selectedFestivity) {
    case SPRING:
      return <SoothingSpring />;
    case SUMMER:
      return <SummerVibes />;
    case FALL:
      return <FestiveFall />;
    case WINTER:
      return <WinterWonderland />;
    default:
      return null;
  }
};
