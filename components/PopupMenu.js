import React from 'react';
import {View, TouchableOpacity, UIManager, findNodeHandle} from 'react-native';
import { Button, Icon, Text } from 'native-base';

class PopupMenu extends React.Component {
  handleShowPopupError = () => {
    // Show error here
  };

  handleMenuPress = () => {
    const { actions, onPress } = this.props;

    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      actions,
      this.handleShowPopupError,
      onPress,
    );
  };

  render() {
    return (
      <Button onPress={this.handleMenuPress}>
        <Icon
          name='menu'
          ref='menu'
        />
      </Button>
    );
  }
}

PopupMenu.propTypes = {
  actions: React.PropTypes.array.isRequired,
  onPress: React.PropTypes.func.isRequired,
  // children: React.PropTypes.object.isRequired,
};

export default PopupMenu;
