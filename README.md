# wagon-cities

This is a basic app, built as part of Le Wagon's React / Redux course, which allows the user to select a city from a list and, in doing so, the Redux state is updated, which in turn updates a container with information about the selected city.

It is based on Le Wagon's simple React + Redux starter with the following config:

- React, ReactDOM
- Redux, React-Redux
- Webpack 3
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

# Learnings from completing this challenge

## Actions, reducers, and getting them into **containers**

Containers are like components which need to access to the Redux state, or which need to call methods which update the Redux state.

### Actions

The _methods_ in this instance are called _actions_. They live in the `src/actions/` directory - in this app kept in a single `index.js` file which exports each action by name. 

Each action is a functions which should return an object like this:

```js
  return {
    type: "SET_CITIES",
    payload: sortedCities
  };
```

The type is a description/label of what the action does. The payload contains what you're going to want to stuff into the Redux state.

The action function can take arguments if you need them to. There is an example of actions with and without in [the `index.js` file](src/actions/index.js).

### Reducers

Reducers are methods which take two arguments, `state` and `action`, and *always* returns an object which will be the next version of the `state` once the `action` has been applied to it.

They should not _modify_ the state: but simply copy and add to the state. See [here](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#reducers-and-immutable-updates) for more information.

## `reducers` and `combineReducers`

Normally, each reducer would copy and expand upon the state, something like this:

```jsx
export default (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_CITIES":
      return action.payload;
    default:
      return {
        ...state,
        cities: action.payload
      };
  }
};
```

Reducers are state in, state out...BUT when using `combineReducers` it's a little different

## Sorting an array in JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


