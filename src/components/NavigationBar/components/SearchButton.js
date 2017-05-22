import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import icons from '../../../img/icons/';

class SearchButton extends Component {
  // TODO: method to toggle search bar and search bar with onSearchCallback
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.func}
        style={styles.button}>
        <Image
          style={styles.icon}
          source={icons['searchFa']}
        />
      </TouchableHighlight>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height: 15,
    width: 15,
  },
  icon: {
    resizeMode: 'contain',
    height: 15,
    width: 15
  }
});

SearchButton.propTypes = {
  onSearchCallback: PropTypes.func
}

export default SearchButton;
