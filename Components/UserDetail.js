// Components/UserDetail.js

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList} from 'react-native';
import base64 from 'react-native-base64'

class UserDetail extends React.Component {
 
 /*   constructor(props) {
      super(props)
      this.state = {
        data : null
        
      }
      this.getDataUsingGet();
    }*/
   getDataUsingGet() {
      //GET request 
      fetch('https://dev95064.service-now.com/api/now/table/sys_user?sysparm_query=sys_id&sysparm_display_value='+this.props.navigation.state.params.idUser+'&sysparm_limit=1  ', {
          method: 'GET',
          headers: {
            'Content-Type': "application/json",
            'Accept':"application/json",
            'Authorization': 'Basic '+base64.encode('admin:Fq4hBrjK6WRl')
          }
      })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
          //Success 
         //alert(JSON.stringify(responseJson.result));
          console.log(JSON.stringify(responseJson.result));
          this.setState({data : responseJson.result})
      })
      //If response is not in json then in error
      .catch((error) => {
          //Error 
          alert(JSON.stringify(error));
          console.error(error);
      });
    }
  render() {
    return (
      <View style={styles.main_container}>
    
      <Image  style={styles.avatar}
        source={this.props.navigation.state.params.idUser.photo} />
         <View style={styles.content_container}>
          <View style={styles.header_container}>
          <Text style={styles.title_text}>{this.props.navigation.state.params.idUser.user_name}</Text>
          <Text style={styles.vote_text}>{this.props.navigation.state.params.idUser.email}</Text>
        </View>
        </View>
     </View>
      
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

export default UserDetail