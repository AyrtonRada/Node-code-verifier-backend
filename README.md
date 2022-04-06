# node-code-verifier-backend
Noed express project - backend

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
