# Rollian UI-LIB

[![Build status](https://badge.buildkite.com/90ff98db996bb137c5be1bdce666c4b1ce68a25b17af0a6a04.svg?branch=master)](https://buildkite.com/harvey/react-component-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This project skeleton was created to help people get started with creating their own React component library using:

- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)

It also features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc. I've hosted this library at: https://www.harveydelaney.com/react-component-library

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../react-component-library
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```
  ...
  "dependencies": {
    ...
    "react-component-library": "file:../react-component-library",
    ...
  },
  ...
```

## Publishing

### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

### Hosting via GitHub

I recommend you host the component library using NPM. However, if you don't want to use NPM, you can use GitHub to host it instead.

You'll need to remove `build/` from `.gitignore`, build the component library (`npm run build`), add, commit and push the contents of `build`. [See this branch for an example.](https://github.com/HarveyD/react-component-library/tree/host-via-github)

You can then install your library into other projects by running:

```
npm i --save git+https://github.com/HarveyD/react-component-library.git#branch-name
```

OR

```
npm i --save github:harveyd/react-component-library#branch-name
```

## Usage

Let's say you created a public NPM package called `harvey-component-library` with the `TestComponent` component created in this repository.

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { RollButton } from '@eridhobffry/ui-library'
const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <RollButton
          label="View more"
          onButtonClick={() => console.log('clicked')}
        />
  </div>
);
export default App;
```

#### CSS Modules

If you want to use CSS Modules, update `postcss` in `rollup-config.js` to:

```
postcss({
  modules: true
})
```

#### Styled Components

If you want to use [`styled-components`](https://styled-components.com/), the changes required are a bit more involved. As such, I've created a branch where I've got `styled-components` working in this component library, [check it out here](https://github.com/HarveyD/react-component-library/tree/styled-components).

### Supporting Image Imports

Add the following library to your component library [@rollup/plugin-image](https://github.com/rollup/plugins/tree/master/packages/image):

```
npm i -D @rollup/plugin-image
```

Then add it to `rollup-config.js`:

```
...
plugins:[
  ...,
  image(),
  ...
]
...
```

You can then import and render images in your components like:

```tsx
import logo from './rollup.png';
export const ImageComponent = () => (
  <div>
    <img src={logo} />
  </div>
);
```

### Supporting JSON Imports

Add the following library to your component library [@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json):

```
npm i -D @rollup/plugin-json
```

Then add it to `rollup-config.js`:

```
...
plugins:[
  ...,
  json(),
  ...
]
...
```

You can then import and use JSON as ES6 Modules:

```tsx
import data from './some-data.json';
export const JsonDataComponent = () => <div>{data.description}</div>;
```

Checkout the [official Rollup plugin list](https://github.com/rollup/plugins) for additional helpful plugins.
