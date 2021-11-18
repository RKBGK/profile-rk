import React from 'react';
import OracleLogo from '../logos/OracleLogo.svg';
import ReactLogo from '../logos/ReactLogo.svg';

export default function Technologies() {
  return (
    <>
      <h1 className="text-center">Hi its about Technologies</h1>
      <div>
        <img src={OracleLogo} alt="gfg-logo" width="200px" height="200px" />
      </div>
      <div>
        <img
          src={ReactLogo}
          alt="gfg-logo"
          width="200px"
          height="200px"
          border="5px"
        />
      </div>
      {/* <div><img src={require('../logos/test.jpg').default} alt="gfg-logo" width="200px" height="200px" /></div> */}
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617126613000"
        alt="gfg-logo"
        width="200px"
        height="200px"
      />
      {/* <object type="image/svg+xml" data="../../public/logos/oracle-6.svg" className="logo">
        Logo
      </object> */}
    </>
  );
}
