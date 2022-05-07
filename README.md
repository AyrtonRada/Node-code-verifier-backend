# node-code-verifier-backend
Node express project - backend

Dependencias instaladas

-express: permite crear una aplicación.<br>
-dotenv: contiene las variables de entorno permitiendo hacer consultas y recibir informacion privada.<br>
-nodemon: monitoriza cualquier cambio en el codigo y cuando ocurre recarga el servidor.<br>
-typescript: permite utilizar la herramienta tsc para transpilar el codigo y generar una solucion de javaScript.<br>
-webpack: permite empaquetar el codigo, incluir todos los archivos javascript en un único archivo.<br>
-webpack-cli: permite ejecutar webpack.<br>
-webpack-shell-plugin: permite hacer la configuracion del webpack.<br>
-eslint: pone reglas al proyecto para que todos programen con las mismas reglas y permite programar de una forma de codigo limpio.<br>
-jest: permite ejecutar tests.<br>
-serve: permite visualizar el coverage.<br>
-concurrently: permite ejecutar varios comandos simultáneamente.<br>

Scripts generados

-start: ejecuta el codigo transpilado.<br>
-build: permite ejecutar tsc y generara lo que esta especificado en tsconfig.json<br>
-dev: se transpilara el codigo constantemente y escuche cualquier modificacion para transpilarlo.<br>
-test: imprime por consola el error.<br>

Archivo .env

Los valores varian segun el entorno en el que se este ejecutando, para éste primer caso se creará la variable PORT = 8000<br>

arhivo logger.ts: permite visualizar las peticiones por consola si hubo algun error<br>
cors: permite que se hagan peticiones de dominios diferentes al que este desplegada la aplicacion<br>
helmet: da seguridad en algunas peticiones<br>

ts-loader: para ejecutar los test (en este caso jest)<br>
@types/swagger-jsdoc: va a generar una pequeña web que resumen todas las apis rest full para que cualquier desarrollador de front que necesite esa informacion para saber que tipo de endpoints existen y que tipos de informacion puede mandar y que tipo de informacion va a recibir.<br> 
@types/swagger-ui-express<br>
@types/bcryptjs<br>
@types/jsonwebtoken<br>
@types/body-parser<br>
(Script)"build:prod" : "npx webpack --mode production"<br>
npm i tsoa: permite poder documentar a traves de anotaciones nuestro codigo.<br>
npm i bcrypt: / bcryptjs: se usa para cifrar contenido <br>
npm i body-parser: se usa para poder leer json del body<br>
jsonwebtoken: gestionara los token que se genere<br>

