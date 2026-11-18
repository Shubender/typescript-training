# TypeScript Practice

A collection of TypeScript exercises focused on typed objects, arrays, function signatures, unions, intersections, and generics.

## Exercises

The main work is in [`exercises/index.ts`](exercises/index.ts), using artist and album data:

- Extract a name from an object with a known property.
- Find albums by artist name.
- Return a mixed collection of artists and albums.
- Build an artist object containing album names.
- Use a generic function constrained to objects with a `name` property.

[`index.ts`](index.ts) contains a simple starter message. [`exercises/test.ts`](exercises/test.ts) contains commented manual calls, not an automated test suite.

## Compile and explore

Requirements: Node.js/npm and a TypeScript compiler. No `package.json` is included in this repository.

```bash
git clone https://github.com/Shubender/typescript-training.git
cd typescript-training
npx --package typescript@4.9.5 tsc --noEmit
```

This runs the compiler with the repository's `tsconfig.json`, which enables `noImplicitAny` and targets ES2019. To experiment, uncomment an example call or write a small local caller and compile it with TypeScript.

## Status

A learning exercise collection, not a deployable application. Some example calls are intentionally commented out. A successful compilation has not been assumed or revalidated as part of this README update; compiler diagnostics are part of working through the exercises.
