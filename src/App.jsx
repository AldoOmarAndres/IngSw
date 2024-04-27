import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [chiste, setChiste] = createSignal({
    joke: "Aun no se me ocurre ninguno",
  });

  const generarChiste = async () => {
    await fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => response.json())
      .then((data) => setChiste(data))
      .catch((error) => error);
      console.log(chiste())
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
