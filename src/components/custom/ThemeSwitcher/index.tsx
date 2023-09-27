import { FC, useState } from "react";

import { ReactComponent as MoonIcon } from "../../../assets/icons/Moon.svg";

import styles from "./styles.module.scss";

const ThemeSwitcher: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChangeSwitcher = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.switch}>
      <input
        onChange={handleChangeSwitcher}
        id={styles.switch__checkbox}
        checked={isChecked}
        type="checkbox"
      />
      <label
        htmlFor={styles.switch__checkbox}
        className={styles.switch__toggle}
      >
        <span className={styles.switch__toggle_button}>
          {isChecked && <MoonIcon />}
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
