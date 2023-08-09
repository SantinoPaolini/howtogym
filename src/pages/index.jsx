import { SiluetaHumano } from "./SiluetaHumano.jsx";
import styles from "../styles/Home.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Elige un musculo</h1>
      <SiluetaHumano />{" "}
    </div>
  );
}
