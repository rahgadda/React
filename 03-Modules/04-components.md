# Components

## Overview
- Before React, UI development was dependent on `traditional DOM structure` i.e. by updating DOM elements.
- Direct DOM updates were very challenging task and if any mistake found, it manually searches the entire application and update accordingly.
- To overcome this issue, `component-based` approach was introduced. In this approach, the entire application is divided into a small logical group of code, which is known as `components`.
- A Component is considered as the core `building block` of a React application. Each component work independently from one another and `merge all in a parent component`, which will be the final UI of your application.
- Each React component have their own structure, methods and APIs. React components can be reusable.
- React provides two libraries to create and stich components
  - `React:` 
    - Create React Components.
    - Starting from React 17, `import React` is not required for Functional Components. This will be added by `babel`.
  - `ReactDOM:` Render React Components on DOM. 
- React supports two types of Components
  - **Functional:**
    - Its a plain JavaScript function that returns JSX.
    - These started as `stateless component` because they do not hold or manage state.
    - Using hooks, state can be added to functional component.
    - Name of component should be `CamelCase`.

      ```jsx
      import React from "react";
  
      function FunctionalComponent() {
        return <h1>Hello, world</h1>;
      }
      ```
  - **Class:**
    - These are created by extending `React.Component` and create a `render` function which returns a React element. 
    - These components are stateful component because they can hold or manage local state. 

      ```jsx
      import React from "react";
  
      class ClassComponent extends React.Component {
        render() {
          return <h1>Hello, world</h1>;
        }
      }
      ```
    