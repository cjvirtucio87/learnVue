1. make a package.json
2. npm install browserify --save-dev
3. npm install babelify --save-dev
4. npm install babel-preset-es2015 --save-dev
5. make a dist folder (this is where the minified js will go)
6. make a src folder for your source code.
7. put node_modules folder on .gitignore.
8. (optional) add .eslintrc.json file to configure eslint.
9. require modules in your app.js
10. write a main.js which will have the code needed to compile everything using browserify and babelify.
11. install aliasify to give aliases for filepaths (useful for modules with specific requirements).
12. install watchify to watch for changes using browserify


*you need to define your data in the config before instantiating a Vue instance
