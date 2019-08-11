import React from 'react';
import {
  AppRegistry,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image
} from 'react-360';
import Entity from 'react-360/Libraries/Mesh/Entity'

class Background extends React.Component {
  constructor(props) {
    super();
    Environment.setBackgroundImage(props.uri, {format: props.format});
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.uri !== this.props.uri ||
      nextProps.format !== this.props.format
    ) {
      Environment.setBackgroundImage(nextProps.uri, {format: nextProps.format});
    }
  }

  render() {
    return null;
  }
}

class Scenes extends React.Component {
  state = {
    index: 0,
  }

  setScene = (id) => {
    const index = this.props.photos.findIndex(p => p.name === id)
    this.setState({
      index
    })
  }

  render() {
    const current = this.props.photos[
    this.state.index % this.props.photos.length
      ];
    Environment.setBackgroundImage(current.uri, {format: '2D'});
    return (
      <View style={styles.wrapper}>
        {current.buttons.map(b =>
          <VrButton key={b.action} onClick={() => this.setScene(b.action)} style={b.style}>
            <Text style={styles.buttonText}>{b.title}</Text>
          </VrButton>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 720,
    width: 4680
  },
  controls: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    transform: [{translate: [-100, 200, 0]}]
  },
  title: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#c0c0d0',
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('kamppa', () => Scenes);
