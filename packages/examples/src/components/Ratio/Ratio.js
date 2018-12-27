import React, { Component, Fragment } from 'react'
import {action} from '@storybook/addon-actions'
import NativeRatio from '../../../../ratio/dist'

const list = [
  { id: 1, name: 'Sim', status: 'inactive' },
  { id: 3, name: 'Talvez', status: 'inactive' },
  { id: 4, name: 'Yep', status: 'inactive' },
  { id: 5, name: 'Nope', status: 'inactive' },
  { id: 2, name: 'Não', status: 'active' }
]

class Ratio extends Component { 
  render() {
    return (
      <Fragment>
        <NativeRatio 
          listItems={list}
          getActiveElement={action('Activated element')}
        />
      </Fragment>
    )
  }

}
export default Ratio
