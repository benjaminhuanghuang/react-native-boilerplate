import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { MKTextField, MKColor, MKButton} from 'react-native-material-kit';

const LoginButton = MKButton.coloredButton()
            .withText('Login')
            .build();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  form: {
    paddingBottom: 10,
    width: 200,
  },
  fieldStyles:{
    height:40,
    color: MKColor.Orange,
    width:200
  },
  loginButtonArea:{
    marginTop: 20
  }
});

export default class Login extends Component {
  state = {
    email:"",
    password:"",
    error:"", 
    loading: false
  }

  onButtonPress()
  {
    const {email, password} = this.state;
    this.setState({
      error:"",
      loading:true
    });
  }
  renderLoader()
  {
    if(this.state.loading)
    {
      return <Loader size="large"/>;
    }
    return <LoginButton onPress={this.onButtonPress.bind(this)}/>;
  }

  render() {
    const {form, fieldStyles, loginButtonArea, errorMessage, container, welcome } = styles;
    return ( 
      <View style = {form} >
        <Text style = { welcome} >
          Login or create an account
        </Text> 
        <MKTextField text = {this.state.email} 
          onTextChange={email=>{ this.setState({email})}}
          textInputStyle={fieldStyles}
          placeholder ={'Email...'}
          tintColor={MKColor.Teal}
        />
        <MKTextField text = {this.state.password} 
          onTextChange={password=>{ this.setState({password})}}
          textInputStyle={fieldStyles}
          placeholder ={'Password...'}
          tintColor={MKColor.Teal}
          password={true}
        />
        <Text style = { errorMessage }>
          {this.state.error}
        </Text> 
        <View style= {loginButtonArea}>
          {this.renderLoader()}
        </View>
      </View>
    );
  }
}

