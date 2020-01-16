// Components/Search.js

import React  from 'react'
import base64 from 'react-native-base64'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, FlatList} from 'react-native';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : null
      
    }
    this.getDataUsingGet();
  }
 getDataUsingGet() {
    //GET request 
    fetch('https://dev95064.service-now.com/api/now/v1/table/sys_user&sysparm_limit=10 ', {
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
   
  clickEventListener(item) {
    Alert.alert(item.name)
  }
  displayDetailForUser = (idUser) => {
    console.log("Display film with id " + idUser)
    this.props.navigation.navigate("UserDetail", { idUser: idUser })
}
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              
            
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.email}</Text>
                    <TouchableOpacity style={styles.followButton}   onPress={() => this.displayDetailForUser(item)}>
                      <Text style={styles.followButtonText}>Detail</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     

export default Search