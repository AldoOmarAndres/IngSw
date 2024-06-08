import styles from "./App.module.css";
import { createSignal } from "solid-js";
import {traerChiste} from './api'

function App() {
  const [chiste, setChiste] = createSignal({
    joke: "Aun no se me ocurre ningún chiste...",
  });

  const generarChiste = async () => {
    setChiste(await traerChiste())
    //console.log(chiste())
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>¿Te cuento un chiste?</h1>
      </header>
      <p class={styles.p}>{chiste().joke || chiste().setup}</p>
      <p class={styles.p}>{chiste() ? (chiste().delivery ? chiste().delivery : null) : null}</p>
      <button onClick={() => generarChiste()} class={styles.button} >Nuevo chiste</button>
    </div>
  );
}

export default App;
