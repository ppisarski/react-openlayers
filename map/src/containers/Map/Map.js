import React, { Component } from 'react';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOSM from 'ol/source/OSM';
import controls from './Controls';
import interactions from './Interactions';

import 'ol/ol.css';  // if using modified css remember to update it to match the one from current ol version
import './Map.css';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            center: [0, 0],
            zoom: 1
        };

        this.map = 'map';

        this.olmap = new OlMap({
            target: null,
            layers: [
                new OlLayerTile({
                    source: new OlSourceOSM()
                })
            ],
            view: new OlView({
                center: this.state.center,
                zoom: this.state.zoom
            }),
            controls: controls,
            interactions: interactions
        });
    }

    componentDidMount() {
        this.olmap.setTarget(this.map);

        // Listen to map changes
        this.olmap.on("moveend", () => {
            const center = this.olmap.getView().getCenter();
            const zoom = this.olmap.getView().getZoom();
            this.setState({ center, zoom });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const center = this.olmap.getView().getCenter();
        const zoom = this.olmap.getView().getZoom();
        if (center === nextState.center && zoom === nextState.zoom) return false;
        return true;
    }

    render() {
        return (
            <div id="map" ref={this.map} className="Map" />
        );
    }
}

export default Map;
