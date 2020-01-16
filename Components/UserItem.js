// Components/UserItem.js
import React from 'react'
import { StyleSheet, View, Text , Image } from 'react-native'

class UserItem extends React.Component {
 
  render() {
    
    const { user, displayDetailForFilm } = this.props
    return (
      <View style={styles.main_container}>
      <Image  style={styles.avatar}
        source={user.photo} />
         <View style={styles.content_container}>
          <View style={styles.header_container}>
          <Text style={styles.title_text}>{user.user_name}</Text>
          <Text style={styles.vote_text}>{user.email}</Text>
        </View>
        </View>
     </View>
  )
}
}

const styles = StyleSheet.create({
main_container: {
  height: 190,
  flexDirection: 'row'
},
image: {
  width: 120,
  height: 180,
  margin: 5,
  backgroundColor: 'gray'
},
content_container: {
  flex: 1,
  margin: 5,
 marginTop: 60
},
header_container: {
  flex: 3,
  flexDirection: 'row'
},
title_text: {
  fontWeight: 'bold',
  fontSize: 20,
  flex: 1,
  flexWrap: 'wrap',
  paddingRight: 10,
  color: '#F0FFFF'
},
vote_text: {
  fontWeight: 'bold',
  fontSize: 20,
  color: '#F0FFFF'
},
description_container: {
  flex: 7
},
description_text: {
  fontStyle: 'italic',
  color: '#F0FFFF'
},
date_container: {
  flex: 1
},
date_text: {
  textAlign: 'right',
  fontSize: 14
}
})
export default UserItem