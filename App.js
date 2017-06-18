import Expo from 'expo';
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import PopupMenu from './components/PopupMenu';

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

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container style={{marginTop: 25}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='md-arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
          <PopupMenu
            actions={['Home','My Polls', 'New Poll', 'Logout']}
            onPress={(e,i) => console.log(i)}
          />
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
