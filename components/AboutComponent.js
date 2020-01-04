import React, { Component } from 'react'
import { ScrollView, FlatList, Text, ListItem } from 'react-native'
import { Card, View } from 'react-native-elements'
import { PARTNERS } from '../shared/partners'

const Mission = () => {
  return (
    <Card>
      <Text>
          We present a curated database of the best campsites
            in the vase woods and back country of the World Wide Web Wilderness.
            We increase access toi adventure for the public while promoting safe and
            respectful use of resources.
      </Text>
    </Card>
  )
}

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partners: PARTNERS
    }
  }

  static navigationOptions = {
    title: 'About Us'
}

  render() {
    const renderPartner = ({item}) => {
        return (
          <ListItem
              title={item.name}
              subtitle={item.description}
              leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
          />
      );
    }

    return (
      <ScrollView>
          <Mission />
        <Card>
        {/* <FlatList
                data={this.state.partners}
                renderItem={renderPartner}
                keyExtractor={item => item.id.toString()}
            /> */}
        </Card>
      </ScrollView>
    )
  }
}

export default About;
