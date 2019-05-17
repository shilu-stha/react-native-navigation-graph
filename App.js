import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'

import routes from './src/routes'
import ComponentOne from './src/container/ComponentOne'
import ComponentTwo from './src/container/ComponentTwo'
import ComponentThree from './src/container/ComponentThree';
import ComponentFour from './src/container/ComponentFour';
import ComponentFive from './src/container/ComponentFive';
import {setNavigator, navigate, popStackToTop} from './src/navigation'

/**
 * Map object that has dynamic destination links.
 */
const dummyMap = {
  [routes.ONE]: {
    nextDestination: routes.TWO
  },
  [routes.TWO]: {
    nextDestination: routes.FIVE
  },
  [routes.THREE]: {
    nextDestination: null
  },
  [routes.FOUR]: {
    nextDestination: routes.THREE
  },
  [routes.FIVE]: {
    nextDestination: routes.FOUR
  }
}

/**
 * Screens that need to show up as modals, also come under this stack navigator.
 */
const AppStack = createStackNavigator(
  {
    [routes.ONE]: ComponentOne,
    [routes.TWO]: ComponentTwo,
    [routes.THREE]: ComponentThree,
    [routes.FOUR]: ComponentFour,
    [routes.FIVE]: ComponentFive
  }
)

class App extends React.Component {

  /**
   * Method to be called when component's task is rejected.
   */
  actionRejected = (routes) => {
    popStackToTop()
  }

  /**
   * Method to be called when component's task is fulfilled. Navigate to next component.
   */
  actionFulfilled = (routes) => {
    navigate(dummyMap[routes].nextDestination)
  }

  render() {
    return (
      <AppStack  ref={node => setNavigator(node)} screenProps={{ actionFulfilled:this.actionFulfilled}}/>
    )
  }
}

export default App
