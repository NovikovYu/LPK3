import { ReactNode, FC, useState } from "react";
import Head from "next/head";
import ModalForm from "./Modal-form";
import Header from "./header";

interface IProps {
  children: ReactNode;
}

const RootLayout: FC<IProps> = ({ children }) => {
  const [openFormSignInModal, setOpenFormSignInModal] = useState(false);
  const handleOpenSignInModal = () => {
    setOpenFormSignInModal(true);
  };
  const handleCloseSignInModal = () => {
    setOpenFormSignInModal(false);
  };

  return (
    <>
      <Head>
        <title>Lintu - main page</title>
        <meta name="description" content={'Page of Lintu progect'} />
        <meta name="keywords" content={'Lintu, investments, finance, shares'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header handleOpenSignInModal={handleOpenSignInModal} />

      {children}

      <footer></footer>

      <ModalForm
        handleCloseSignInModal={handleCloseSignInModal}
        openFormSignInModal={openFormSignInModal}
      />
    </>
  );
};

export default RootLayout;