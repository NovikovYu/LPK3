import { Container, Typography } from "@mui/material";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout
      pageTitle={"Lintu - main page"}
      pageDescription={"Home Page of Lintu progect"}
      pageKeywords={"Lintu, investments, finance, shares"}
    >
      <main>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: 24 }}>Home Page</Typography>
        </Container>
      </main>
    </Layout>
  );
}
