export async function traerChiste() {
  const chiste = await fetch("https://v2.jokeapi.dev/joke/Any").then(
    (response) => response.json()
  );
  return chiste;
}
