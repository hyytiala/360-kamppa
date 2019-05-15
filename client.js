
import {ReactInstance} from 'react-360-web';
import {Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  const cylinderSurface = new Surface(
    1000, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );
  r360.renderToSurface(
    r360.createRoot('kamppa', {
      photos: [
        {uri: './static_assets/piha_1.jpg', title: 'Kämpän pihapiiri', format: '2D'},
        {uri: './static_assets/eteinen.jpg', title: 'Kämpän eteinen', format: '2D'},
        {uri: './static_assets/tupa_1.jpg', title: 'Kämpän tupa 1', format: '2D'},
        {uri: './static_assets/tupa_2.jpg', title: 'Kämpän tupa 2', format: '2D'},
        {uri: './static_assets/keittio.jpg', title: 'Kämpän keittiö', format: '2D'},
        {uri: './static_assets/pikkukamppa.jpg', title: 'Kämpän pikkukämppä', format: '2D'},
        {uri: './static_assets/sauna_tupa.jpg', title: 'Saunan tupa', format: '2D'},
        {uri: './static_assets/pesutupa.jpg', title: 'Saunan pesuhuone', format: '2D'},
        {uri: './static_assets/sauna.jpg', title: 'Sauna', format: '2D'},
        {uri: './static_assets/piha_2.jpg', title: 'Puuliiteri & hakkuupaikka', format: '2D'},
      ],
    }),
    r360.getDefaultSurface(),
    //myCylinderSurface
  );
}

window.React360 = {init};
