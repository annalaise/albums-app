import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1, // gives the width around the object
    borderRadius: 2, // gives rounded corners
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // nothing on L or R, will be on top and bottom
    shadowOpacity: 0.1, // can be anything from 0 to 1
    shadowRadius: 2,
    elevation: 1, // need to figure out what this does!
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  }
};

export default Card;
