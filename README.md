# use-timeout

[![License](https://img.shields.io/npm/l/use-timeout.svg)](https://github.com/flaque/use-timeout/blob/master/package.json)

A react-hook for accessing setTimeout without constantly resetting.

## Install

```
yarn add @flaque/use-timeout
```

## Usage

```ts
const [setTimeoutHook, clearTimeoutHook] = useTimeout();

setTimeoutHook(() => {
  console.log("It's been 10000 miliseconds!");
}, 10000);

// ...

clearTimeoutHook(); // Stops the timeout before it happens
```
