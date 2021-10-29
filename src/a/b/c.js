import React, { useState, useEffect } from 'react';

import './index.scss';

function SampleComponent() {

  return <div id="sample-component-main">
    <div className="static-access-from-public-directory"></div>
    <div className="relative-access-from-public-directory"></div>
    <div className="static-access-from-src-directory"></div>
    <div className="relative-access-from-src-directory"></div>
  </div>;

}

export default SampleComponent;