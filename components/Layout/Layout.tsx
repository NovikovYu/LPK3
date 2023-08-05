import { ReactNode, FC, useState } from 'react';
import ModalForm from './Modal-form';
import Header from './header';
import Head from 'next/head';

interface IProps {
  children: ReactNode;
  pageTitle: string;
  pageDescription?: string;
  pageKeywords?: string;
}

const Layout: FC<IProps> = ({
  children,
  pageTitle,
  pageDescription = 'Page of Lintu progect',
  pageKeywords = 'Lintu, investments, finance, shares',
}) => {
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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header handleOpenSignInModal={handleOpenSignInModal} />
      <ModalForm
        handleCloseSignInModal={handleCloseSignInModal}
        openFormSignInModal={openFormSignInModal}
      />
      {children}
      <footer></footer>
    </>
  );
};
export default Layout;
