# CURSO DE FUNDAMENTOS DE TYPESCRIPT

## Primeros pasos

Agregar un archivo *.gitignore*, nos ayudaremos de [gitignore.io](gitignore.io)

## Instalaciones necesarias

> npm init -y

> npm i typescript -D

> npx tsc --version

## Atrapando bugs

En un archivo de javascript podemos atrapar errores mientras escribimos código, colocando la sentencia en la primera linea de nuestro archivo

> //@ts-check

## El compilador de TypeScript

Compilar

> npx tsc src/demo.ts

Compilar a una versión específica del lenguaje

> npx tsc src/demo.ts --target es6

Compilar a otra carpeta

> npx tsc src/demo.ts --target es6 --outDir dist

Compilar todos

> npx tsc src/*.ts --target es6 --outDir dist

## tsconfig.json

> npx tsc --init

> npx tsc

> npx tsc --watch


