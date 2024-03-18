# reto-tecnico

- Primer commit inicial con la creacion del proyecto utilizando el CLI de vue, seleccione vue 3.x, vuex, linter, test unitarios y routing en el asistente.

- Registre una app en la api de reddit para poder consumir los endpoints y obtuve el access token a través de postman para realizar una pequeña prueba golpeando a uno de estos endpoints.

- Me di cuenta q no necesitaba un access token para poder pegarle al endpoint de las 50 entradas principales, sino que se accede a traves de este endpoint: https://www.reddit.com/top.json?limit=50, esto segun la documentacion misma de la API

- Instale axios para hacer las peticiones http a la api de reddit y cree un archivo redditAPI para tener ahi la config de la API

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
