import React, { Component } from 'react'
import { InfoWindow } from "react-google-maps"

class InfoWindowComponent extends Component {
  render() {
    const { weatherStatus, isInfoShown, toggleInfo } = this.props
    const isLoading = weatherStatus.loading;
    const hasErrored = weatherStatus.error;

    let contents = null;
    
      if (isLoading) {
        contents =  <p>Loading...</p>
      }
      else if (hasErrored) {
        contents = <p>Sorry! There was an error loading the weather</p>
      }
      else {
        const { preferredTemp } = weatherStatus;
        const { tempf, tempc, area, main } = weatherStatus.success;
        contents = (
          <div>
             <div id="icon">
               <img src="" alt=""/>
             </div>
             <div>
               Area: { area }
             </div>
             <div>
               Temperature: { preferredTemp === '°F' ? `${tempf} °F` : `${tempc} °C` }
             </div>
             <div>
               Weather: { main }
             </div>
           </div>
        )
      }

    return (
      <div>
        {isInfoShown &&
          <InfoWindow onCloseClick={() => toggleInfo()}>
            {contents}
          </InfoWindow>
        }
      </div>
    )
  }
}

export default InfoWindowComponent
