import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

/**
 */
class ComponentOne extends React.Component {
  onPress = () => {
    this.props.screenProps.actionFulfilled(this.props.navigation.state.routeName)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ComponentOne</Text>
        <Button title="Destination" onPress={this.onPress}/>
      </View>
    )
  }
}

export default ComponentOne
