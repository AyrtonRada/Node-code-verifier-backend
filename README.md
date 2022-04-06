# node-code-verifier-backend
Noed express project - backend

Dependencias instaladas

-express: permite crear una aplicación.
-dotenv: contiene las variables de entorno permitiendo hacer consultas y recibir informacion privada
-nodemon: monitoriza cualquier cambio en el codigo y cuando ocurre recarga el servidor.
-typescript: permite utilizar la herramienta tsc para transpilar el codigo y generar una solucion de javaScript.
-webpack: permite empaquetar el codigo, incluir todos los archivos javascript en un único archivo.
-webpack-cli: permite ejecutar webpack
-webpack-shell-plugin: permite hacer la configuracion del webpack
-eslint: pone reglas al proyecto para que todos programen con las mismas reglas y permite programar de una forma de codigo limpio
-jest: permite ejecutar tests
-serve: permite visualizar el coverage
-concurrently: permite ejecutar varios comandos simultáneamente

Scripts generados

-start: ejecuta el codigo transpilado
-build: permite ejecutar tsc y generara lo que esta especificado en tsconfig.json
-dev: se transpilara el codigo constantemente y escuche cualquier modificacion para transpilarlo
-test: imprime por consola el error

Archivo .env

Los valores varian segun el entorno en el que se este ejecutando, para éste primer caso se creará la variable PORT = 8000
