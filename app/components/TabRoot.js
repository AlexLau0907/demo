import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'

import Recipes from '../components/Recipes'
import Samples from '../components/Samples'
import Home from '../containers/navRootContainer'

class Tabs extends Component {
  _changeTab (i) {
    const { changeTab } = this.props;
    changeTab(i)
  }
  _renderTabContent (key) {
    switch (key) {
      case 'home':
        return <Home />
      case 'recipes':
        return <Recipes />
      case 'samples':
        return <Samples />
    }
  }
  render () {
    const tabs = this.props.tabs.tabs.map((tab, i) => {
      return (
        <TabBarIOS.Item key={tab.key}
          icon={tab.icon}
          selectedIcon={tab.selectedIcon}
          title={tab.title}
          onPress={() => this._changeTab(i)}
          selected={this.props.tabs.index === i}>
          {this._renderTabContent(tab.key)}
        </TabBarIOS.Item>
      )
    })
    return (
      <TabBarIOS tintColor='black'>
        {tabs}
      </TabBarIOS>
    )
  }
}

export default Tabs