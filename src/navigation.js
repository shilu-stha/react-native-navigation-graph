import { NavigationActions, StackActions } from 'react-navigation'

let navigator

/**
 * Set top level navigator.
 *
 * @param {Object} navRef
 */
export function setNavigator(navRef) {
  navigator = navRef
}

/**
 * Navigate to a route, with any params.
 *
 * @param {string} routeName
 * @param {Object} params
 */
export function navigate(routeName, params = {}) {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }))
}

/**
 * If inside a stack navigator, this will pop the stack to the root element.
 */
export function popStackToTop() {
  navigator.dispatch(StackActions.popToTop())
}
