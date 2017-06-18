import React, { Component } from 'react';
import { Button, Icon, Text, Drawer } from 'native-base';
// import SideBar from './yourPathToSideBar';

export default class MenuDrawer extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Button onPress={this.handleMenuPress}>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          onClose={() => this.closeDrawer()} >
        </Drawer>
      </Button>
    );
  }
}
