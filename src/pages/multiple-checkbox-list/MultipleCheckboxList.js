import { useCallback, useRef, useState } from 'react';

import uniqueId from '../../lib/uniqueId.js';
import useShift from '../../hooks/useShift';
import Checkbox from '../../components/Checkbox.js';

import { DefaultOptions }  from './options';
import styles from './style.module.scss';

function MultipleCheckboxList() {
  const { isShift } = useShift();
  const { current: INIT_OPTIONS } = useRef(DefaultOptions.map(option => ({ ...option, key: uniqueId(), checked: false })));
  const [multipleCheckboxOptions, setMultipleCheckboxOptions] = useState(INIT_OPTIONS);
  const [prevCheckedIndex, setPrevCheckedIndex] = useState(-1);

  const handleChange = useCallback((key) => (event) => {
    const clonedMultipleCheckboxOptions = [...multipleCheckboxOptions];

    const changeIndex = multipleCheckboxOptions.findIndex(option => option.key === key);

    if (isShift) {
      const newMultipleCheckboxOptions = clonedMultipleCheckboxOptions.map((option, index) => {
        if (option.disabled) {
          return option
        }

        const indexArray = [prevCheckedIndex, changeIndex];
        indexArray.sort();
        const [minMIndex, maxIndex] = indexArray;

        if (minMIndex <= index && index <= maxIndex) {
          return {
            ...option,
            checked: event.target.checked,
          }
        }

        return option;
      });

      
      setMultipleCheckboxOptions(newMultipleCheckboxOptions);
      return;
    }

    const newOption = {
      ...clonedMultipleCheckboxOptions[changeIndex],
      checked: event.target.checked,
    }
    clonedMultipleCheckboxOptions.splice(changeIndex, 1, newOption);

    setPrevCheckedIndex(changeIndex);
    setMultipleCheckboxOptions(clonedMultipleCheckboxOptions);
  }, [isShift, prevCheckedIndex, multipleCheckboxOptions]);

  return (
    <div className={styles.multipleCheckboxList}>
      {multipleCheckboxOptions.map(({ key, label, checked, disabled }) =>
        <Checkbox
          key={key}
          label={label}
          checked={checked}
          disabled={disabled}
          onChange={handleChange(key)}
        />
      )}
    </div>
  )
}

export default MultipleCheckboxList;
