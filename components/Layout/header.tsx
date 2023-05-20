import * as React from 'react';
import '@fontsource/roboto/400.css';
import HeaderSm from './HeaderSm';
import HeaderFull from './HeaderFull';
import HeaderMd from './HeaderMd';

interface Props {
  handleOpen: () => void;
  isMatchSm: boolean;
  isMatchLg: boolean;
}

function Header({handleOpen, isMatchSm, isMatchLg}:Props) {
  if (isMatchLg) {
    return <HeaderFull handleOpen={handleOpen}/>
  }
   if (isMatchSm) {
    <HeaderSm handleOpen={handleOpen} /> 
  }
  return <HeaderMd handleOpen={handleOpen}/>
  }
  
export default Header;
