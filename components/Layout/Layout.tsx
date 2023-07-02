import { FC, ReactNode, useState } from "react";
import { Box, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";
import Header from "./header";
import {
  EmailMessageStyle,
  EmailMessageStyleSm,
  SignUpStyle,
  SignUpStyleSm,
} from "./Header-style";
import SignUpForm from "@/feature/sign-up/sign-up-form";
import SendEmailMessage from "@/feature/sign-up/email-message";

interface IProps {
  children: ReactNode;
  pageTitle: string;
  pageDescription?: string;
  pageKeywords?: string;
}
const Layout: FC<IProps> = ({
  children,
  pageTitle,
  pageDescription = "Page of Lintu progect",
  pageKeywords = "Lintu, investments, finance, shares",
}) => {
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [openFormModal, setOpenFormModal] = useState(false);

  const handleOpen = () => {
    setOpenFormModal(true);
  };
  const handleClose = () => {
    setOpenFormModal(false);
  };

  const [openEmailModal, setOpenEmailModal] = useState(false);
  const handleOpenEmail = () => {
    setOpenEmailModal(true);
  };
  const handleCloseEmail = () => {
    setOpenEmailModal(false);
  };

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header handleOpen={handleOpen} isMatchLg={isMatchLg} />
      <Modal
        open={openFormModal}
        onClose={handleClose}
        aria-labelledby="sign-up"
        aria-describedby="sign-up-form"
      >
        <Box sx={isMatchSm ? { ...SignUpStyleSm } : { ...SignUpStyle }}>
          <SignUpForm
            handleClose={handleClose}
            handleOpenEmail={handleOpenEmail}
            isMatchSm={isMatchSm}
          />
        </Box>
      </Modal>
      <Modal
        open={openEmailModal}
        onClose={handleCloseEmail}
        aria-labelledby="email-message"
        aria-describedby="send-email-message"
      >
        <Box
          sx={isMatchSm ? { ...EmailMessageStyleSm } : { ...EmailMessageStyle }}
        >
          <SendEmailMessage
            handleCloseEmail={handleCloseEmail}
            isMatchSm={isMatchSm}
          />
        </Box>
      </Modal>
      <Box>{children}</Box>
    </div>
  );
};
export default Layout;
