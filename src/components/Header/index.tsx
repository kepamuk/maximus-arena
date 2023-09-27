import { FC } from "react";

import ThemeSwitcher from "../custom/ThemeSwitcher";

import { ReactComponent as ButtonChevronIcon } from "../../assets/icons/Button-chevron.svg";
import { ReactComponent as LinkArrowIcon } from "../../assets/icons/Link-arrow.svg";
import { ReactComponent as LanguageIcon } from "../../assets/icons/Language.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/Person.svg";
import { ReactComponent as LogoIcon } from "../../assets/icons/Logo.svg";

import styles from "./styles.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo__block}>
        <LogoIcon className={styles.logo} />
        <div className={styles.nav}>
          <span className={styles.nav__link}>Twitter</span>
          <span className={styles.nav__link}>Telegram</span>
          <div className={styles.nav__link_block}>
            <span className={styles.nav__link}>Docs</span>
            <LinkArrowIcon />
          </div>
        </div>
      </div>
      <div className={styles.info__block}>
        <button className={styles.subscribe__button}>Выбор подписки</button>
        <div className={styles.person__block}>
          <PersonIcon />
          <span className={styles.email}>JohnDoe@gmail.com</span>
          <ButtonChevronIcon />
        </div>
        <div className={styles.language__block}>
          <LanguageIcon />
          <span className={styles.language}>RU</span>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
