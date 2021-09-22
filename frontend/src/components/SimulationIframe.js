import React from 'react';
import Iframe from 'react-iframe';

export const SimulationIframe = props =>{

const { selectedtool={} } = props;

  return <Iframe
  url={selectedtool?.viewerURL}
  width="100%"
  height="824vh"
  id="myId"
  className="myClassname"
  display="initial"
  position="relative"
/>
}