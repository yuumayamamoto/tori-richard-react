import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header,Menu,Image,Icon, Grid ,List} from 'semantic-ui-react';

class ToriRichard extends React.Component {
  render() {
    return (
        <Container textAlign="center">
    <Header as='h1'>Tori Richard!</Header>

          <Image src='/public/images/bwod-2777.jpg' /></Image>
    </Container>
  );
  }
}


class Reacthead extends React.Component {
  render() {
    return (
        <div>
        <Menu borderless className = "topmenu" >
          <Menu.Item><Image src = "http://murphyshawaii.com/media/2014/04/murphyshawaii.png"></Image></Menu.Item>
          <Menu.Item position = "right"> home</Menu.Item>
          <Menu.Item> About us<Icon name ="dropdown"></Icon></Menu.Item>
          <Menu.Item> St.Patrick's Day</Menu.Item>
          <Menu.Item> Menus<Icon name ="dropdown"></Icon></Menu.Item>
          <Menu.Item> Bar</Menu.Item>
          <Menu.Item> <Icon name = "search"> </Icon> </Menu.Item>
        </Menu>
        </div>
    )
  }
}

class Murphys extends React.Component {
  render() {
    return (
        <div textAlign="center">
          <Reacthead></Reacthead>

        </div>
    );
  }
}

ReactDOM.render(<ToriRichard/>, document.getElementById('root'));

// http://courses.ics.hawaii.edu/ics314f19/morea/react/branden-wod-react-hmy.html