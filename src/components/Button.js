import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Click me!
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16.,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, // this tells the object that it should fill all available space
    alignSelf: 'stretch', // we want the item to position itself using flexbox rules
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  }
};

export default Button;
