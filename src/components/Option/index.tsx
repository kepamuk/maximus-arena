import { FC } from "react";

import { ReactComponent as EllipsisIcon } from "../../assets/icons/Ellipsis.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/Settings.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/Delete.svg";
import { ReactComponent as CopyIcon } from "../../assets/icons/Copy.svg";

import styles from "./styles.module.scss";

interface IOtionProps {
  handleToggleOptionPopup?: any;
  optionPopupId?: any;
  isActive?: boolean;
  title: string;
  id?: number;
}

const Option: FC<IOtionProps> = ({
  handleToggleOptionPopup,
  optionPopupId,
  isActive,
  title,
  id,
}) => {
  return (
    <div
      className={
        isActive || optionPopupId === id ? styles.active__option : styles.option
      }
      key={id}
    >
      <span
        className={
          isActive || optionPopupId === id
            ? styles.active__list_text
            : styles.list__text
        }
      >
        {title}
      </span>
      <EllipsisIcon
        onClick={() => handleToggleOptionPopup(id)}
        className={styles.option__icon}
      />
      {optionPopupId === id && (
        <div className={styles.popup}>
          <div className={styles.active__popup_option}>
            <SettingsIcon className={styles.active__icon} />
            <span className={styles.active__popup_text}>Настройка графика</span>
          </div>
          <div className={styles.popup__option}>
            <CopyIcon />
            <span className={styles.popup__text}>Скопировать</span>
          </div>
          <div className={styles.popup__option}>
            <DeleteIcon />
            <span className={styles.delete__text}>Удалить график</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.date__block}>
            <span>Сохранен:</span>
            <span>2023-02-07 12:03:17</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Option;
