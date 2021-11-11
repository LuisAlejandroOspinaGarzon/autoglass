import React,{ Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
 const containerStyle = {
    position: 'absolute',  
    width: '1020px',
    height: '375px'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map 
       containerStyle={containerStyle}
       center={{
            lat: 4.676853041762948,
            lng: -74.04965690662634
          }}
      google={this.props.google} zoom={15}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA26FiRCdjaJB1ynbioD1SlIMLMNSrE85M")
})(MapContainer)