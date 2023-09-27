import { FC } from "react";

import Instruments from "../../components/Instruments";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import styles from "./Main.module.scss";

const Main: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Instruments />
        <Sidebar />
      </div>
    </div>
  );
};

export default Main;
