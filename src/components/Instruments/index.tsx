import { FC, useState } from "react";

import clsx from "clsx";

import MetricsPopup from "../MetricsPopup";

import { ReactComponent as ButtonChevronIcon } from "../../assets/icons/Button-chevron.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/Settings.svg";
import { ReactComponent as PhotoIcon } from "../../assets/icons/Photo.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";
import { ReactComponent as FileIcon } from "../../assets/icons/File.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/Info.svg";

import styles from "./styles.module.scss";

const filterOptions = [
  { id: 1, title: "Актив", value: "BItcoin" },
  {
    id: 2,
    title: "Метрики",
    value: "Цена и Объем",
    popup: <MetricsPopup />,
  },
  { id: 3, title: "Рынок", value: "Бессрочный" },
  { id: 4, title: "Биржа", value: "Все" },
  { id: 5, title: "Символ", value: "BTC-USD" },
  { id: 6, title: "Интервал", value: "Блокировать" },
  { id: 7, title: "Тип графика", value: "Свечи" },
];

const Instruments: FC = () => {
  const [selectedFilterId, setSelectedFilterId] = useState<number>();

  const handleOpenFilter = (id: number) => {
    if (selectedFilterId === id) {
      setSelectedFilterId(0);
    } else {
      setSelectedFilterId(id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.instruments__block}>
        <div className={styles.settings__block}>
          <div className={styles.button}>
            <SettingsIcon />
          </div>
          <div className={styles.block}>
            <span className={styles.text}>
              BTC: Short squeeze in the works Copy
            </span>
            <InfoIcon className={styles.info__icon} />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.public__button}>
            <span className={styles.text}>Опубликовать</span>
          </div>
          <div className={styles.button}>
            <FileIcon />
          </div>
          <div className={styles.button}>
            <PhotoIcon />
          </div>
        </div>
      </div>
      <div className={styles.filters__block}>
        <div className={styles.filters__cells_wrapper}>
          {filterOptions.map((option: any) => (
            <div
              onClick={() => handleOpenFilter(option.id)}
              className={styles.filter__cell}
              key={option.id}
            >
              <span className={styles.filter__title}>{option.title}</span>
              <div className={styles.filter__value_block}>
                <span
                  className={clsx(
                    styles.filter__value,
                    selectedFilterId === option.id &&
                      styles.active__filter_value
                  )}
                >
                  {option.value}
                </span>
                <ButtonChevronIcon
                  className={
                    selectedFilterId === option.id ? styles.active__icon : ""
                  }
                />
              </div>
              {selectedFilterId === option.id && option.popup}
            </div>
          ))}
        </div>
        <div className={styles.buttons__block}>
          <div className={styles.wide__button}>
            <PlusIcon />
            <span className={styles.text}>Индикаторы</span>
          </div>
          <div className={styles.wide__button}>
            <span className={styles.text}>Сравнить</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruments;
