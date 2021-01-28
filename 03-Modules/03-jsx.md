# Javascript Extension - JSX

## Overview
- It is a syntax extension to JavaScript.
- JSX is a `pseudo language` created by Facebook to allow using `HTML` inside `Javascript`.
- After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
- `React` library is used to convert `JSX` to `Java Script`. 
  - Due to JSX popularity, Starting from `React 17`, this conversion is delegated to `babel react plugin`.
  - React import code `import React from React` is not required from React 17. For more details visit [here](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
  - Javascript function `React.createElement` can also be used to add HTML elements in components.
  ```javaScript
  const App = () =>{
    return React.createElement(
      'div',
      {},
      React.createElement(
        'h1',
        {},
        'Hello World'
      )
    );
  } 
  ```
- JSX should always return `single element`. `<div>` tag or `<>` [called as react fragment] can be used to wrap around and return multiple elements. 
- Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. Example `onclick` event is used as `onClick`
  ```javaScript
  const App = () =>{
    return (<input type="button" onClick={hello});
  } 
  ```
- CSS `className` should be used instead of `class`.
- The `import` statement can be used to import `js` file and `css` files. The `.js` file extension is optional but `.css` extension is mandatory.
- Every element in JSX should be closed
- Flower brackets `{}` can be used to execute Javascript code.
- `{/* <jscode> */}` are used to comment JS code.

## Appendix
- [JSX by React Team](https://reactjs.org/docs/introducing-jsx.html)