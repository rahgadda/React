# Creating Electron App

## Creating Project
- Create React App using `electronforge`
```sh
npx create-electron-app electron --template=webpack
npm install --save-dev @babel/core @babel/preset-react babel-loader
npm install --save react react-dom
```
- Add below code `webpack.rules.js`
```json
{
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        exclude: /node_modules/,
        presets: ['@babel/preset-react']
      }
    }
}
```
- Comment below in `main.js` to disable display of Developer Tools   
`mainWindow.webContents.openDevTools();`