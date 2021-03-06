import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';

import moveFilterOptions from '../../../util/moveFilters/moveFilterOptions';

import LinearGradient from 'react-native-linear-gradient';

const redPrimary = '#9d1918';
const redSecondary = '#320f1c';

//Components
import FilterAccordion from './FilterAccordion';
import CustomText from '../../CustomText/CustomText';
import Button from '../../Button/Button';

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetFlag: 0,
    };
  }

  resetFilters(callback) {
    this.setState( {resetFlag: this.state.resetFlag + 1}, callback );
  }

  renderMenuHeader(resetCallback) {
    return (
      <View style={Styles.menuHeader}>
        <CustomText textStyle={Styles.menuTitle}>Filters</CustomText>
        <Button
          buttonStyle={Styles.menuResetBtn}
          titleStyle={Styles.menuResetBtn__Title}
          onPress={() => this.resetFilters(resetCallback)}
          title="Reset"
        />
      </View>
    );
  }

  renderFilterAccordions(filterOptions, callback) {
    return filterOptions.map((filter, i) => {
      return (
        <FilterAccordion
          key={i}
          options={filter.options}
          filterKey={filter.key}
          headerLabel={filter.label}
          onFilterSelectHandler={(key, value, addFlag) => callback(key, value, addFlag)}
          easing="easeOutCubic"
        />
      )
    })
  }

  render() {
    const { onFilterSelectHandler, onFilterResetHandler } = this.props;
    return (
      <LinearGradient colors={[redPrimary, redSecondary]}>
        {this.renderMenuHeader(onFilterResetHandler)}
        <ScrollView style={Styles.menuContainer}>
          <View key={this.state.resetFlag} style={Styles.menuFiltersContainer}>
            {this.renderFilterAccordions(moveFilterOptions, onFilterSelectHandler)}
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }
}

const Styles = StyleSheet.create({
  menuContainer: {
    paddingBottom: 580,
    backgroundColor: 'transparent',
  },
  menuHeader: {
    flexDirection: 'row',
    zIndex: 9999,
    paddingTop: 25,
    paddingLeft: 10,
    paddingBottom: 15,
    backgroundColor: '#380d1d'
  },
  menuTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    flex: 0.8,
    height: 26
  },
  menuResetBtn: {
    flex: 0.2,
    marginTop: 11
  },
  menuResetBtn__Title: {
    color: 'white',
    fontFamily: 'Exo2-Light',
    fontSize: 12,
    opacity: 0.9,
    height: 12
  },
  menuFiltersContainer: {
    paddingTop: 1,
    paddingBottom: 200
  }
});

FilterMenu.propTypes = {
  onFilterPressHandler: PropTypes.func,
  onFilterResetHandler: PropTypes.func
}

export default FilterMenu;
