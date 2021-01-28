# Props

## Overview
- Props are `arguments` passed into React components. These can also be used to pass data from parent component to child component.
- React Props are `read-only` or `immutable`. React will through an error if we try to change their value.
- Props are passed to components via `HTML attributes`. `brand` is an example of prop to Car component.
  ```jsx
  <Car brand="Ford" />;
  ```
- The props can be accessed as shown below. `this` keyword is optional for `functional` components and required for `class` components
  ```jsx
  <h2>Car Brand is {this.props.brand}</h2>
  ```