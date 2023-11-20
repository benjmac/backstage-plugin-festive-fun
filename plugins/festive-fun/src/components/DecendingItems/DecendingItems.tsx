import React from 'react';
import { useStyles } from '../../styles/styles';

export const DecendingItems = ({
  itemImages,
  itemTotal = 28,
}: {
  itemImages: string[];
  itemTotal?: number;
}) => {
  const styles = useStyles();
  const len = itemImages.length;
  const images = ['', ...itemImages];

  return (
    <div className={styles.loader}>
      {Array.apply(null, Array(itemTotal)).map((_val, indx) => {
        // Will generate 1- len of item images
        const itemIndx = indx + 1;
        const itemNum = itemIndx % len === 0 ? len : itemIndx % len;
        return (
          <span key={indx} className={styles.itemContainer}>
            <img
              className={styles.itemImage}
              src={images[itemNum]}
              alt={`decending-item-${itemNum}`}
            />
          </span>
        );
      })}
    </div>
  );
};
