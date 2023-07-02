import { FC, PropsWithChildren } from "react";
import * as React from 'react';
import ModalForm from "./Modal-form";
import Header from "./header";

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {

  const [openFormSignInModal, setOpenFormSignInModal] = React.useState(false);
  const handleOpenSignInModal = () => {
    setOpenFormSignInModal(true);
  };
  const handleCloseSignInModal = () => {
    setOpenFormSignInModal(false);
  };

  return (
      <>
        <Header
          handleOpenSignInModal={handleOpenSignInModal} 
        />
        <ModalForm handleCloseSignInModal={handleCloseSignInModal} openFormSignInModal={openFormSignInModal}/>
         {children}
         <footer></footer>
       </>
  )
};
export default Layout;