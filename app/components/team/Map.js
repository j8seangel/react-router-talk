import React from 'react';
import L from 'leaflet'; // eslint-disable-line import/no-unresolved

class Map extends React.Component {

  componentDidMount() {
    this.map = L.map('map-base', {
      minZoom: 2,
      maxZoom: 19,
      zoom: this.props.map.zoom,
      center: [this.props.map.lat, this.props.map.lng],
      detectRetina: true
    });
    this.markers = [];

    this.map.attributionControl.addAttribution('&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>');
    this.map.zoomControl.setPosition('topright');
    this.map.scrollWheelZoom.disable();
    this.tileLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png').addTo(this.map).setZIndex(0);

    this.setMarkers();
    this.setListeners();
    this.fitBounds();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.members.length !== this.props.members.length) {
      this.props = nextProps;
      this.clearMarkers();
      this.setMarkers();
      this.fitBounds();
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  setListeners() {
    function zoomend() {
      this.props.updateMapURL(this.getMapParams());
    }
    function drag() {
      this.props.updateMapURL(this.getMapParams());
    }

    this.map.on('zoomend', zoomend.bind(this));
    this.map.on('drag', drag.bind(this));
  }

  setMarkers() {
    if (!this.props.members.length) return;
    const memberIcon = L.divIcon({
      className: 'map-marker',
      iconSize: null,
      html: '<span class="icon"</span>'
    });
    this.props.members.forEach((member) => {
      const mLatLng = JSON.parse(member.latlng).coordinates;
      const marker = L.marker([mLatLng[1], mLatLng[0]], { icon: memberIcon }).addTo(this.map);
      const popupImg = member.picture_gif_url || member.picture_url;
      marker.bindPopup(`<img src=${popupImg} alt=${member.name} />`);
      marker.on('mouseover', function () {
        this.openPopup();
      });
      marker.on('mouseout', function () {
        this.closePopup();
      });
      this.markers.push(marker);
    });
  }

  getMapParams() {
    const latLng = this.map.getCenter();
    return {
      zoom: this.map.getZoom(),
      lat: latLng.lat.toFixed(2),
      lng: latLng.lng.toFixed(2)
    };
  }

  clearMarkers() {
    if (this.markers.length) {
      this.markers.forEach((item) => {
        this.map.removeLayer(item);
      });
      this.markers = [];
    }
  }

  fitBounds() {
    if (!this.markers.length) return;
    const maxZoom = this.markers.length > 1 ? 14 : 7;
    const markersGroup = new L.featureGroup(this.markers); // eslint-disable-line new-cap
    this.map.fitBounds(markersGroup.getBounds(), { maxZoom, padding: [5, 5] });
  }

  render() {
    return (
      <div id={'map-base'} className="c-team-map"></div>
    );
  }
}

Map.propTypes = {
  updateMapURL: React.PropTypes.func.isRequired,
  map: React.PropTypes.object.isRequired,
  members: React.PropTypes.array
};

export default Map;
