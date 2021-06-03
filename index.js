import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions, View, Animated, Easing } from 'react-native';
import NativeLinearGradient from 'react-native-linear-gradient';
import rgb2hex from 'rgb2hex';

// const {height, width} = Dimensions.get('window');

class LinearGradient extends Component {
  render() {
    const { color0, color1, children, points } = this.props;
    const gStart = points.start;
    const gEnd = points.end;
    return (
      <NativeLinearGradient
        // colors={this.props.colors.map((c) => rgb2hex(c).hex)}
        colors={[color0, color1].map((c) => rgb2hex(c).hex)}
        start={gStart}
        end={gEnd}
        style={[styles.linearGradient]}>
        {children}
      </NativeLinearGradient>
    )
  }
}
Animated.LinearGradient = Animated.createAnimatedComponent(LinearGradient)
// Animated.NativeLinearGradient = Animated.createAnimatedComponent(NativeLinearGradient)

export const presetColors = {
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

class AnimatedGradient extends Component {

  static defaultProps = {
    customColors: presetColors.instagram,
    speed: 4000,
    points: {
      start: { x: 0, y: 0.4 },
      end: { x: 1, y: 0.6 }
    }
  }

  state = {
    color0: new Animated.Value(0),
    color1: new Animated.Value(0),
  }

  componentDidMount = () => {
    this.startAnimation();
  }

  startAnimation = () => {
    const { color0, color1 } = this.state;
    const { customColors, speed } = this.props;
    [color0, color1].forEach(color => color.setValue(0));

    Animated.parallel(
      [color0, color1].map(animatedColor => {
        return Animated.timing(animatedColor, {
          toValue: customColors.length,
          duration: customColors.length * speed,
          easing: Easing.linear,
          useNativeDriver: this.props.useNativeDriver || false,
        })
      })
    )
      .start(this.startAnimation);

  };

  render() {

    const { color0, color1 } = this.state;
    const { customColors, children, points, style } = this.props;
    const preferColors = [];
    // while (preferColors.length < customColors.length) {
    while (preferColors.length < 2) {
      preferColors.push(
        customColors
          .slice(preferColors.length)
          .concat(customColors.slice(0, preferColors.length + 1))
      )
    }
    const interpolatedColors = [color0, color1].map((animatedColor, index) => {
      return animatedColor.interpolate({
        inputRange: Array.from({ length: customColors.length + 1 }, (v, k) => k),
        outputRange: preferColors[index]
      })
    });

    return (
      <Animated.LinearGradient
        style={[styles.linearGradient, style]}
        points={points}
        color0={interpolatedColors[0]}
        color1={interpolatedColors[1]}>
        {children}
      </Animated.LinearGradient>
    )
  }
}


const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});


export default AnimatedGradient
