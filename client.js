
import {ReactInstance} from 'react-360-web';
import {Surface} from 'react-360-web';
import {scenes} from './scenes'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  const cylinderSurface = new Surface(
    4680,
    720,
    Surface.SurfaceShape.Cylinder
  );
  r360.renderToSurface(
    r360.createRoot('kamppa', {
      photos: scenes
    }),
    //r360.getDefaultSurface(),
    cylinderSurface
  );
}

window.React360 = {init};
