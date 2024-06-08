export async function traerChiste() {
  const chiste = await fetch("https://v2.jokeapi.dev/joke/Any").then(
    (response) => response.json()
  );
  if (chiste.category == "Dark"){
    return {
      joke: "Oops, un chiste de humor negro, mejor elegimos otro",
      error: false
    }
  }
  return chiste;
}
