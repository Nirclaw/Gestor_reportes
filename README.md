# Sistema de Gestión de Reporte de Ordenadores en Salones

El Sistema de Gestión de Reporte de Ordenadores en Salones es una aplicación diseñada para facilitar la administración de ordenadores en diferentes salones y resolver incidencias relacionadas con hardware y software. Permite a los usuarios, especialmente profesores y personal de TI, gestionar eficientemente el inventario de ordenadores y realizar un seguimiento de las incidencias en cada equipo.

## Características

- Creación de Reportes: Los usuarios pueden generar reportes detallados de incidencias en los ordenadores, especificando la categoría (hardware o software) y el nivel de gravedad (leve, moderado, crítico).
- Gestión de Profesores: El sistema permite agregar nuevos profesores al sistema, asignándoles un identificador único y detalles relevantes.
- Administración de Ordenadores: Los usuarios pueden registrar nuevos ordenadores, incluyendo información como el número de serie y estado general.
- Asignación de Ordenadores a Salones: Los ordenadores pueden ser asignados a salones específicos, facilitando un seguimiento claro de la distribución en el campus.

## Requisitos

Para poder ejecutar y trabajar con este proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js**: La versión recomendada es la 14.x o superior.

- **TypeScript**: Se utiliza TypeScript como lenguaje de programación para el desarrollo del proyecto.

- Librerías utilizadas

  : Asegúrate de tener las siguientes librerías instaladas, las versiones indicadas son las utilizadas en este proyecto:

  - `class-transformer@0.5.1`
  - `dotenv@16.3.1`
  - `express@4.18.2`
  - `mysql2@3.5.1`
  - `nodemon@3.0.1`
  - `reflect-metadata@0.1.13`
  - `typescript@5.1.6`

```npm
npm install -g class-transformer@0.5.1 dotenv@16.3.1 express@4.18.2 mysql2@3.5.1 nodemon@3.0.1 reflect-metadata@0.1.13 typescript@5.1.6

```





## Uso

1. Asegúrate de haber completado la instalación del proyecto siguiendo los pasos de la sección de "Instalación".
2. Ejecuta la aplicación utilizando el comando:

```
npm run dev

```

Con la aplicación en funcionamiento, podrás probar el funcionamiento del backend utilizando herramientas como Thunder Client o Postman. Ten en cuenta que este proyecto no tiene una interfaz gráfica, por lo que la interacción se realizará a través de solicitudes HTTP.

En el proyecto se dejo el script de la base de datos para que utilices de ejemplo y puedas utilizarla una vez creada la base de datos

y asu vez se dejo la insersion de datos para que puedas ver directamente el funcionamiento analiza los datos que se ingresaron para que entiendas los ejemplos 

para iniciar el proyecto ejecuta el comando npm run dev.

Interfaz de Usuario: Una vez que la aplicación esté en funcionamiento, con la ayuda de una extencion thunder client o postman podras probar el funcionamiento del backend ya que el proyecto esta enfocado en el backen y no tiene una interfaz grafica

- **Crear Reporte**:Para crear un reporte, envía una solicitud POST a la siguiente URL:

  ```
  http://127.10.10.10:5100/reportes/create
  ```

  Envía los datos en formato JSON siguiendo este ejemplo:

  ```
  {
    "nivel_incidencia": 1,
    "categoria_incidencia": 1,
    "descripcion": "Descripción del lco copoo 1",
    "fecha": "2023-07-15",
    "lugar_incidencia": 1,
    "Trainer": 1,
    "Ordenador": 1
  }
  ```

  ​

  ### Ver Cantidad de Reportes

  Para obtener la cantidad de reportes existentes, realiza una solicitud GET a la siguiente URL:

  ```
  http://127.10.10.10:5100/reportes/cantidad
  ```

- ### Gestión de Profesores

  Para crear un nuevo docente, envía una solicitud POST a la siguiente URL:

  ```
  http://127.10.10.10:5100/trainers/create
  ```

  Envía los datos en formato JSON siguiendo este ejemplo:

```json
{
  "nombre_completo": "Juan Pérez dsf",
  "email_Personal": "juanperez@gmail.com",
  "email_corporativo": "juanper@ezempresa.com",
  "numero_movil": 1234567890,
  "numero_fijo": 987654321,
  "numero_empresa": 54321,
  "numero_movil_empresa": 987654321
}
```

### Ver Cantidad de Profesores

Para obtener la cantidad de profesores registrados, realiza una solicitud GET a la siguiente URL:

http://127.10.10.10:5100/trainers/cantidad





### Administración de Ordenadores y Asignación de Salones

Para crear un nuevo ordenador y asignarlo a un salón, envía una solicitud POST a la siguiente URL:
http://127.10.10.10:5100/ordenadores/create

```json
{
  "ordenador_id_teclado": 101,
    "ordenador_id_mouse": 102,
    "ordenador_id_diadema": 103,
    "ordenador_id_salon": 1
}
```

y para ver la cantidad de ordenadores

http://127.10.10.10:5100/ordenadores/cantidad

Recuerda que para interactuar con la aplicación, debes utilizar herramientas como Thunder Client o Postman para enviar las solicitudes HTTP y recibir las respuestas del backend. El proyecto se enfoca en el backend y no cuenta con una interfaz gráfica.

Si tienes alguna pregunta o problema, no dudes en contactarnos. ¡Espero que disfrutes trabajando con el Sistema de Gestión de Reporte de Ordenadores en Salones!



## Contacto

Si tienes alguna pregunta, problema o sugerencia sobre el proyecto, no dudes en ponerte en contacto conmigo. Puedes hacerlo de las siguientes maneras:

- **Correo Electrónico**: [	caicedonicolas150@gmail.com](caicedonicolas150@gmail.com)
- **GitHub**: [nirclaw](https://github.com/Nirclaw)
- **LinkedIn**: [Nicolas Mauricio](https://www.linkedin.com/in/nicolás-mauricio-18685b256/)

Si prefieres alguna otra forma de contacto, déjamelo saber y estaré encantado de proporcionarte la información necesaria.

## Estado del Proyecto

**En Desarrollo Activo**: El proyecto está en desarrollo activo y se están agregando nuevas funcionalidades, corrigiendo errores y mejorando el código de manera regular. Es posible que haya cambios frecuentes y actualizaciones.