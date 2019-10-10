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

## Why?

If you call `setTimeout` inside of a function component like this:
```ts
function MyComponent() {
  const [isLoading, setIsLoading] = useState(false)
  
  setTimeout(() => {
    setIsLoading(true)
  }, 1000)
  
  return <p>{isLoading ? "loading" : "finished"}</p> 
}
```

Then it'll get reset when the function renders. That can lead to weird unexpected behavior. `use-timeout` uses hooks to keep an internal reference to the timeout to avoid any weirdness. 
