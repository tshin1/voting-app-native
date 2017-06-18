import Expo from 'expo';
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Drawer } from 'native-base';

import PopupMenu from './components/PopupMenu';
import MenuDrawer from './components/MenuDrawer';

export default class Setup extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });

    this.setState({isReady: true});
  }

  twitterLogin = () => {
    fetch('https://pollsta.herokuapp.com/polls/auth/twitter/')
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container style={{marginTop: 25}}>
        <Header>
          <Left>
            <MenuDrawer>
            </MenuDrawer>

          </Left>
          <Body>
            <Title>Create poll</Title>
          </Body>
          <Right>


          </Right>
        </Header>
        <Content>
          <Text style={{textAlign: 'center'}}>These are polls that you and other users have created.</Text>
          <Text style={{textAlign: 'center'}}>Select a poll to see poll details and vote.</Text>
          <Text style={{textAlign: 'center'}}>Log in with Twitter to create your own polls.</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}
