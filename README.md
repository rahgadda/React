# React.js

- [Overview](#overview)
- [Architecture](#architecture)
- [Installation](#installation)
- [Modules](#modules)
- [Appendix](#appendix)

## Overview
- React.js is an open-source, front end, JavaScript `library` for building user interfaces or UI components.
- It is maintained by `Facebook` and a community of individual developers and companies.
- React is only concerned with `state management` and `rendering` that state to the `DOM`. 
- React is called `library` instead of `framework` because it only supports `DOM manipulations`. 
  - Other UI framework capabilities like routing, two-way-data-binding will be handled by other libraries.

## Architecture
- Major challenge faced during complex UI codebase is involvement of massive team members.
- More time is spent in determining what code does what. React solves this with below:
    - Complexity of UI code is addressed by break down application into smaller, single-purpose `Components`.
    - Each component maintains a `State`. Based on user interactions, React re-renders components by reacting to change in state.
    - During re-rendering, once the component is ready to render, a virtual snapshot of the change in component state is taken.
    - React now compares the snapshot with the real `DOM` and analyzes the differences. Once it finds the difference, the changes are applied to the UI that’s reflected on the user’s screen. 
    - React uses Virtual DOM (`VDOM`) process to update actual DOM. This has following steps
      - Create a VDOM with a new state
      - Compare it with older VDOM
      - Update only different nodes in real DOM
      - Assign new VDOM as an older VDOM

![](./01-Images/01-ReactArchitecture.png)

## Installation
- Babel
- Webpack 5

## Modules
Below are the basic building blocks of React.js
- Components
- JSX
- State
- Props
- Router
- Event Handler
- Lifecycle
- Hooks
- Redux
- Material UI
- Storybook
- Jest

## Appendix
- [React](https://reactjs.org/)
- [React Video Tutorial - Codevolution](https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)