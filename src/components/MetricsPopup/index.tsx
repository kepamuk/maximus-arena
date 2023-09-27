import { FC } from "react";

import { ReactComponent as ButtonChevronIcon } from "../../assets/icons/Button-chevron.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/Ellipsis.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";

import styles from "./styles.module.scss";

const MetricsPopup: FC = () => {
  const handlePopupClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.wrapper} onClick={handlePopupClick}>
      <div className={styles.search__block}>
        <input
          defaultValue="Поиск Метрик"
          className={styles.input}
          type="text"
        />
        <SearchIcon />
      </div>
      <div className={styles.list}>
        <div className={styles.main__active_option}>
          <ButtonChevronIcon className={styles.active__icon} />
          <span className={styles.active__text}>Exchange Flows</span>
        </div>
        <div className={styles.active__option}>
          <span className={styles.active__text}>
            Exchange Withdrawing Transactions
          </span>
          <EllipsisIcon className={styles.option__icon} />
        </div>
        <div className={styles.option}>
          <span className={styles.text}>Text</span>
          <EllipsisIcon className={styles.option__icon} />
        </div>
        <div className={styles.option}>
          <span className={styles.text}>Text</span>
          <EllipsisIcon className={styles.option__icon} />
        </div>
        <div className={styles.main__option}>
          <ButtonChevronIcon className={styles.active__icon} />
          <span className={styles.text}>Exchange Flows</span>
        </div>
        <div className={styles.active__option}>
          <span className={styles.active__text}>
            Exchange Withdrawing Transactions
          </span>
          <EllipsisIcon className={styles.option__icon} />
        </div>
        <div className={styles.option}>
          <span className={styles.text}>Text</span>
          <EllipsisIcon className={styles.option__icon} />
        </div>
        <div className={styles.option}>
          <span className={styles.text}>Text</span>
          <EllipsisIcon className={styles.option__icon} />
        </div>
      </div>
    </div>
  );
};

export default MetricsPopup;
