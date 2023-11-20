import React from 'react';
import { Festivity } from './types';
import { defaultFestivitySelector, handleFestivityType } from './utils';
import { renderInTestApp } from '@backstage/test-utils';
import { screen } from '@testing-library/react';

describe('utils', () => {
  describe('defaultFestivitySelector', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    it('should return SPRING when month is between 3 and 5', () => {
      jest.setSystemTime(new Date(2023, 4, 1));
      expect(defaultFestivitySelector()).toBe('spring');
    });

    it('should return SUMMER when month is between 6 and 8', () => {
      jest.setSystemTime(new Date(2023, 7, 1));
      expect(defaultFestivitySelector()).toBe('summer');
    });

    it('should return FALL when month is between 9 and 11', () => {
      jest.setSystemTime(new Date(2023, 10, 1));
      expect(defaultFestivitySelector()).toBe('fall');
    });

    it('should return WINTER when month is between 12 and 2', () => {
      jest.setSystemTime(new Date(2023, 1, 1));
      expect(defaultFestivitySelector()).toBe('winter');
    });

    afterAll(() => {
      jest.useRealTimers();
    });
  });

  describe('handleFestivityType', () => {
    it('should render SoothingSpring component when festivity is SPRING', async () => {
      const festivity = 'spring' as Festivity;
      const festivitySelector = undefined;

      await renderInTestApp(
        handleFestivityType({
          festivity,
          festivitySelector,
        }) as React.ReactElement,
      );

      expect(await screen.findByTestId('spring')).toBeInTheDocument();
    });

    it('should render SummerVibes component when festivity is SUMMER', async () => {
      const festivity = 'summer' as Festivity;
      const festivitySelector = undefined;

      await renderInTestApp(
        handleFestivityType({
          festivity,
          festivitySelector,
        }) as React.ReactElement,
      );

      expect(await screen.findByTestId('summer')).toBeInTheDocument();
    });

    it('should render FestiveFall component when festivity is FALL', async () => {
      const festivity = 'fall' as Festivity;
      const festivitySelector = undefined;

      await renderInTestApp(
        handleFestivityType({
          festivity,
          festivitySelector,
        }) as React.ReactElement,
      );

      expect(await screen.findByTestId('fall')).toBeInTheDocument();
    });

    it('should render WinterWonderland component when festivity is WINTER', async () => {
      const festivity = 'winter' as Festivity;
      const festivitySelector = undefined;

      await renderInTestApp(
        handleFestivityType({
          festivity,
          festivitySelector,
        }) as React.ReactElement,
      );

      expect(await screen.findByTestId('winter')).toBeInTheDocument();
    });

    it('should render default component when festivity is not recognized', async () => {
      const festivity = 'oops' as Festivity;
      const festivitySelector = undefined;

      const { container } = await renderInTestApp(
        handleFestivityType({
          festivity,
          festivitySelector,
        }) as React.ReactElement,
      );

      expect(container).toBeEmptyDOMElement();
    });

    it('should render component returned by festivitySelector when custom selector is passed', async () => {
      const festivity = 'auto' as Festivity;
      const festivitySelector = jest.fn(() => 'spring' as Festivity);

      await renderInTestApp(
        handleFestivityType({
          festivity,
          festivitySelector,
        }) as React.ReactElement,
      );

      expect(festivitySelector).toHaveBeenCalled();
    });
  });
});
