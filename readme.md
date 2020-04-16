# Boilerplate JS e (S)CSS

## Babel

O código já é automaticamente transformado com babel (usando @babel/preset-env).
Isso já é uma funcionalidade que existe automaticamente com o Parcel. Se quiser adicionar configurações adicionais, basta adicionar o arquivo `.babelrc` com as configurações.

## SCSS

Scss já está configurado por padrão.

## TailwindCss

O tailwindcss já está configurado por padrão também. Além disso, em produção, é aplicado o purgecss, que faz com que o tamanho reduza drasticamente.

## Vue

Como o build padrão do Vue é o runtime-only (e não com o compiler), é necessário montar o Vue com a forma correta:

``` javascript
import Vue from 'vue';
import App from './App.vue';

new Vue({ render: h => h(App) }).$mount('#app');
```


## Available Scripts


### npm run dev

Runs the project in development mode with hot reloading on `http://localhost:8000`.

### npm run build

Builds the project for production to the dist folder.

### npm run serve

Serve the production build on `http://localhost:8000`.

## Como utilizar

1. Faça um git clone do repositório. 
   1. `git clone https://github.com/robertotcestari/parcel-boilerplate.git`
2. Rode um `npm install`
3. Apague a pasta `.git` para começar com um novo histórico. 