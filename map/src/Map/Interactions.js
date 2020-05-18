import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';

const dragRotateAndZoom = new DragRotateAndZoom();

const interactions = defaultInteractions()
    .extend([dragRotateAndZoom]);

export default interactions;