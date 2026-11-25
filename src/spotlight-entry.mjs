import React from 'react';
import {createRoot} from 'react-dom/client';
import {createSpotlightCard} from './spotlight-card.mjs';
const SpotlightCard=createSpotlightCard(React);
window.mountPortfolioSpotlight=function(host) {
  const root=createRoot(host);
  root.render(React.createElement(SpotlightCard,{spotlightColor:'#d4fa68',intensity:.12,proximity:50,borderGlow:.6}));
  return ()=>root.unmount();
};
