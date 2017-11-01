# react-native-animated-linear-gradient
Animated linear gradient as background animation or other.


## Example

<p align="center">
  <img src="https://github.com/heineiuo/react-native-animated-linear-gradient/raw/master/.github/capture.gif" width=375 height=688>
<br>

## Install

1. install [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient),  run `npm install react-native-linear-gradient --save` 
2. run `react-native link react-native-linear-gradient`
3. run `npm install react-native-animated-linear-gradient --save`


## Use

```javascript
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'

class HelloWorldApp extends Component {
  render() {
    return (
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}/>
    );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

## Props

1. `customColors`
A colors `array`. This package has include some preset colors, default is `presetColors.instagram`:

```javascript
export presetColors = {
  instagram: [
    'rgb(106, 57, 171)',
    'rgb(151, 52, 160)',
    'rgb(197, 57, 92)',
    'rgb(231, 166, 73)',
    'rgb(181, 70, 92)'
  ],
  firefox: [
    'rgb(236, 190, 55)',
    'rgb(215, 110, 51)',
    'rgb(181, 63, 49)',
    'rgb(192, 71, 45)',
  ],
  sunrise: [
    'rgb(92, 160, 186)',
    'rgb(106, 166, 186)',
    'rgb(142, 191, 186)',
    'rgb(172, 211, 186)',
    'rgb(239, 235, 186)',
    'rgb(212, 222, 206)',
    'rgb(187, 216, 200)',
    'rgb(152, 197, 190)',
    'rgb(100, 173, 186)',
  ]
};
```

2. `speed`
The speed of the animation. default is 4000.

3. `points` (experimental)
Describe the direction of linear gradient with start point and end point [see more](https://github.com/react-native-community/react-native-linear-gradient#start)

Default: 
```js
const DEFAULT_POINTS = {
  start: {x: 0, y: 0.4}, 
  end: {x: 1, y: 0.6}
}
```

Example:

vertical: 
```jsx
<AnimatedLinearGradient points={{start: {x: 0.5, y: 0}, end: {x: 0.5, y: 1}}}/>
```

You can find out it is static values, no animate here :( . This points is going to be animateable soon :) .


## License

MIT