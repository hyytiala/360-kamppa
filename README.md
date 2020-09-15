# Virtual camping site

[See demo](https://www.hyytiala.fi/virtuaalikamppa)

## Description

This application is created for viewing 360 photos of our scout troop's camping site. With this 360 world you can see the camping place and find instruction for different appliances at the premises.

Made with [React 360](https://facebook.github.io/react-360/)

## Key features:

* Easy to use interface to navigate trought the premises
* Big buttons indicating navigation options
* Responsive design that work on different devices

## How to use:

1. Open the application and wait for the first photo to load
2. Tilt and pan using a mouse or finger if you have a touch screen
3. Press the black button to move to different position
4. Press the blue button to see the instruction for the appliance you clicked.


## Development:
**Prerequisites:**
* Node.js >10

**Start development:**
1. Install yarn packages `yarn install`
2. Start development server `yarn start`
3. Application running at `http://localhost:8081/index.html`

**Make production bundle:**
1. Make bundle with `yarn bundle`
2. Copy contains of `./build` to your server root and make directory `./static_assets` for all image assets.
