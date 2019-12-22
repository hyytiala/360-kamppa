import React from 'react'
import {
  AppRegistry,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
  NativeModules,
  AsyncStorage
} from 'react-360'

class Scenes extends React.Component {
  state = {
    index: 0,
  }

  componentDidMount() {
    this.checkCache()
  }

  checkCache = async () => {
    try {
      const cacheItem = await AsyncStorage.getItem('bg_id')
      const halfHour = 30 * 60 * 1000
      console.log(cacheItem)
      if (cacheItem !== null && cacheItem.time + halfHour > Date.now()) {
        console.log('TRUE')
        this.setState({
          index: cacheItem.index
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  setScene = (id) => {
    const index = this.props.photos.findIndex(p => p.name === id)
    const cacheObject = {
      index,
      time: Date.now()
    }
    try {
      AsyncStorage.setItem('bg_id', cacheObject)
    } catch (error) {
      console.log(error)
    }
    this.setState({
      index
    })
  }

  handleLinks = (href) => {
    NativeModules.LinkingManager.openURL(href)
  }

  render() {
    const current = this.props.photos[
      this.state.index % this.props.photos.length
    ]
    Environment.setBackgroundImage(current.uri, { format: '2D' })
    console.log(current)
    return (
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          {current.buttons.map(b =>
            <VrButton key={b.action} onClick={() => this.setScene(b.action)} style={b.style}>
              <Text style={styles.buttonText}>{b.title}</Text>
            </VrButton>
          )}
        </View>
        <View style={styles.contentWrapper}>
          {current.links.map(l =>
            <VrButton key={l.action} onClick={() => this.handleLinks(l.action)} style={l.style}>
              <Text style={styles.linkText}>{l.title}</Text>
            </VrButton>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 1500,
    width: 4096
  },
  contentWrapper: {
    //backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1500,
    width: 4096
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
  },
  linkText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
})

AppRegistry.registerComponent('kamppa', () => Scenes)
