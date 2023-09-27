import { FC, useState } from "react";

import clsx from "clsx";

import Option from "../Option";

import { ReactComponent as ButtonChevronIcon } from "../../assets/icons/Button-chevron.svg";
import { ReactComponent as EllipsisIcon } from "../../assets/icons/Ellipsis.svg";
import { ReactComponent as BurgerIcon } from "../../assets/icons/Burger.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/Plus.svg";

import styles from "./styles.module.scss";

const options = [
  { id: 1, title: "Text" },
  { id: 2, title: "Text" },
  { id: 3, title: "Text" },
  { id: 4, title: "Text" },
  { id: 5, title: "Unveiling Bitcoin Price Trends", isActive: true },
  { id: 6, title: "Text" },
  { id: 7, title: "Text" },
  { id: 8, title: "Text" },
  { id: 9, title: "Text" },
  { id: 10, title: "Text" },
  { id: 11, title: "Text" },
  { id: 12, title: "Text" },
  { id: 13, title: "Text" },
  { id: 14, title: "Text" },
  { id: 15, title: "Text" },
  { id: 16, title: "Text" },
  { id: 17, title: "Text" },
];

const Sidebar: FC = () => {
  const [activeMenuSection, setActiveMenuSection] = useState<string>("graph");
  const [optionPopupId, setOptionPopupId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeMenuSection = (sectionName: string) => {
    setActiveMenuSection(sectionName);
  };

  const handleToggleOptionPopup = (id: number) => {
    if (id === optionPopupId) {
      setOptionPopupId(null);
    } else {
      setOptionPopupId(id);
    }
  };

  return (
    <div className={styles.container}>
      <div className={clsx(styles.menu, isOpen && styles.active__menu)}>
        <div className={styles.buttons__block}>
          <div
            onClick={() => handleChangeMenuSection("graph")}
            className={clsx(
              styles.menu__button,
              activeMenuSection === "graph" && styles.active__menu_button
            )}
          >
            Мои графики
          </div>
          <div className={styles.border}></div>
          <div
            onClick={() => handleChangeMenuSection("general")}
            className={clsx(
              styles.menu__button,
              activeMenuSection === "general" && styles.active__menu_button
            )}
          >
            Общие
          </div>
        </div>
        {activeMenuSection === "graph" && (
          <div className={styles.graph__list}>
            <div className={styles.list__title_block}>
              <ButtonChevronIcon />
              <span className={styles.list__text}>My Chart Group</span>
              <EllipsisIcon />
            </div>
            {options.map((option: any) => (
              <Option
                handleToggleOptionPopup={handleToggleOptionPopup}
                optionPopupId={optionPopupId}
                isActive={option.isActive}
                title={option.title}
                key={option.id}
                id={option.id}
              />
            ))}
          </div>
        )}
        <div className={styles.create__block}>
          <PlusIcon />
          <span className={styles.create__text}>Добавить новый</span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div
          className={clsx(
            styles.burger__button,
            isOpen && styles.active__burger__button
          )}
          onClick={handleOpenMenu}
        >
          <BurgerIcon
            className={clsx(styles.icon, isOpen && styles.active__icon)}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
