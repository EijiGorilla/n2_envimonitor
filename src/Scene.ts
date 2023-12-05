import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';

import {
  chainageLayer,
  stationBoxLayer,
  stationLayer,
  prowLayer,
  monitorPointLayer,
  monitorPointLayer1,
} from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

// Group layers //
const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [stationBoxLayer, chainageLayer, prowLayer],
});

const monitoringPointGroupLayer = new GroupLayer({
  title: 'Monitoring Points',
  visible: true,
  visibilityMode: 'independent',
  layers: [monitorPointLayer, monitorPointLayer1],
});

// Change the layer order by using index numbers in map.add
map.add(alignmentGroupLayer);
map.add(stationLayer);
map.add(monitoringPointGroupLayer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [120.5793, 15.18],
  zoom: 13,
  viewingMode: 'local',
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionEnabled: true,
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Chainage' ? (item.visible = false) : (item.visible = true);
  },
});

const sources = [
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    zoomScale: 1000,
    name: 'Main KM',
    placeholder: 'example: 80 + 400',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'Chainage',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIconClass: 'esri-icon-search',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});
