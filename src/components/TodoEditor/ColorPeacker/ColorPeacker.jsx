import { useState, memo } from 'react';
import classNames from 'classnames';
import styles from '../ColorPeacker/ColorPeaCker.module.css';

const ColorPeacker = ({ options }) => {
  const [actOpionIdx, setActOptionIdx] = useState(0);

  const setActiveIndex = index => setActOptionIdx(index);

  const onActiveOption = index => {
    return classNames('colorPicker__option', {
      'colorPicker__option--active': index === actOpionIdx,
    });
  };

  const { label } = options[actOpionIdx];

  return (
    <div className={styles.colorPeacker}>
      <h2 className={styles.titleColorPeacker}>Color Peacker</h2>
      <p className={styles.change}>Change color: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={onActiveOption(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default memo(ColorPeacker);
