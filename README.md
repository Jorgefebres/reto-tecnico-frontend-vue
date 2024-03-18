# reto-tecnico

- Primer commit inicial con la creacion del proyecto utilizando el CLI de vue, seleccione vue 3.x, vuex, linter, test unitarios y routing en el asistente.

- Registre una app en la api de reddit para poder consumir los endpoints y obtuve el access token a través de postman para realizar una pequeña prueba golpeando a uno de estos endpoints.

- Me di cuenta q no necesitaba un access token para poder pegarle al endpoint de las 50 entradas principales, sino que se accede a traves de este endpoint: https://www.reddit.com/top.json?limit=50, esto segun la documentacion misma de la API

- Instale axios para hacer las peticiones http a la api de reddit y cree un archivo redditAPI para tener ahi la config de la API

---

- cree una carpeta modulos para modularizar la app, se que no es necesario por el tamaño del proyecto, pero lo considero una buena práctica y me servira de ejemplo para implementar un routing propio en el modulo de entradas de reddit.

- Elimine los componentes helloWorld y about que no los voy a estar necesitando y modifique el componente home para que me sirva a modo de entrada a la aplicación, todo ello para poder probar el routing.

- cambie el logo de vue por el logo de reddit,

- cree un nav aun sin estilos (Para esto estoy pensando utilizar boostrap por temas de tiempo),

- Agregué una regla al Eslint para que me permita tener nombres simples en mis componentes por ejemplo Navbar en vez de NavbarVue o NavbarComponent, esto por preferencia personal.

- Agregué alguna estructura de carpetas q pienso que voy a estar necesitando a futuro dentro del modulo de las entradas de reddit.

---

- Agregué boostrap para tener algunos estilos predefinidos.

- Agregué una carpeta css con un archivo styles.scss (voy a estar usando sass para esto tuve q instalar sass y sass loader como dependencias de desarrollo) y unos estilos reset del css para evitar que algunos estilos difieran segun el navegador.

---

- Agregué un componente para contener el listado (Entry list) de entradas (Entry).
- Agregué un maquetado inicial con la data que se requiere mostrar por entrada.

![Maquetado inicial Desktop](https://res.cloudinary.com/dhromiae3/image/upload/v1710781925/reto-tecnico/uzrd8rd2pmliga5qnlfc.png)

![Maquetado inicial Mobile](https://res.cloudinary.com/dhromiae3/image/upload/v1710782114/reto-tecnico/iyg1xebuauyajac4saj4.png)

---

- Agregué el cdn de fontawesome para poder utilizar algunos iconos que voy a estar necesitando (como el de los comentarios o el avatar, salir de la aplicacion, etc)

- Agregué una maquetación con la informacion sobre si la entrada ha sido leida, el nro de comentarios de la entrada.

![Maquetado número de comentarios y entrada vista](https://res.cloudinary.com/dhromiae3/image/upload/v1710784590/reto-tecnico/ayisc1zl61moqrk75lxe.png)

- Agregué la funcionalidad de mostrar en pantalla completa la imagen una vez seleccionada.

![Maquetado imagen seleccionada en pantalla completa](https://res.cloudinary.com/dhromiae3/image/upload/v1710784591/reto-tecnico/ckymehlkc6t3t6rfsbob.png)

---

- Agregué la maquetación y funcionalidad de paginación en la lista de entradas.

![Maquetado paginación](https://res.cloudinary.com/dhromiae3/image/upload/v1710786308/reto-tecnico/tqiyjwdmxyucnspkq5ua.png)

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
