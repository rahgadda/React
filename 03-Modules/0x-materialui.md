# Material Design - React

## Overview
- Material Design is a design language developed in 2014 by **Google** and is very popular for web and mobile applications.
- Material Design is inspired by the physical world and its textures, including how they reflect light and cast shadows.
- It’s a visual language that synthesizes those classic principles of good design with the innovation of technology and science.
- The canonical implementation of Material Design for web application user interfaces is called **Polymer.**
- More details are available [here](https://www.material.io/)

## Installation
- Create [webpack.config.js]() and [.babelrc]()
- Run below commands to create React Project with Material UI. Project details are available [here]()
  ```sh
  # Initialize NPM Project
  npm init -y

  # Required during Runtime
  npm i -S react react-dom
  npm i -S @material-ui/core @material-ui/icons

  # Required during Development-only
  npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
  npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
  npm i -D html-loader
  npm i -D browser-sync browser-sync-webpack-plugin

  # Folders for Source and Webpack Final Code
  mkdir -m777 src
  mkdir -m777 dist
  ```

## Modules
- 