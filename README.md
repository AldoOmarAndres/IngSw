# Algunos Chistes
Una aplicación simple que utiliza SolidJs, Vite, Jest y una api externa para atraer risas de los usuarios.<br>

Es una prueba del poder de la automatización, utilizando GitHub Actions, Azure, Jira y SonarCloud para poder integrar cambios de manera automática y atendiendo la calidad del código.

Para servir los chistes se consume la API de `https://v2.jokeapi.dev/`. 

## Uso

```bash
$ npm install # or pnpm install or yarn install
```

### Por si tienes interes en Solid: [Solid Website](https://solidjs.com)

## Scripts

Se puede usar:

### `npm run test`

Ejecuta un test simple verificando si la API responde con o sin errores.

### `npm run build`

Es importante ejecutar el build y que este se encuentre en la carpeta `dist` ya que es donde está indicado que debe buscar Azure para hacer el deploy. <br>
En caso de querer cambiar, se debe actualizar la variable correspondiente del archivo `.github/workflow/cicd.yml`


## Deployment

La aplicación se encuentra deployada en Azure Static Web Apps.<br>
Se puede acceder a la misma mediante el siguiente link [TeCuentoUno](https://gray-stone-08c0f440f.5.azurestaticapps.net)
(Actualmente está dado de baja)
