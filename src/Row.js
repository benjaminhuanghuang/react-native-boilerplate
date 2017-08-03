import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

//

export default class Row extends Component {
  constructor(props){
    super(props);
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      allComplete: false,
      value: "",
      items:[],
      dataSource: ds.cloneWithRows([])
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
  }

  handleToggleAllComplete ()
  {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map(item => ({
      ...item,
      complete
    }));
    console.table(newItems);
    this.setState({
      items:newItems,
      allComplete: complete
    });
  }

  handleAddItem()
  {
    if (!this.state.value)
      return;
    const newItems= [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete:false
      }
    ]
    this.setState({
      items: newItems,
      value:""
    })
  }

  render() {
    return ( 
      <View style = {styles.container} >
        <Header value = {this.state.value} onAddItem ={this.handleAddItem}
                onChange ={(value)=>this.setState({value})}
                onToggleAllComplete = {this.handleToggleAllComplete}/>
        <View style = {styles.content}>
        </View>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios:{paddingTop: 30}
    })
  },
  content:{
    flex: 1
  }
});