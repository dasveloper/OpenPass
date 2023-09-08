import Layout from "@/components/Layout";
import { Box, Container, Grid } from "@mantine/core";
import Generator from "@/components/Generator";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <Layout>
      <Box
        py={30}
        px="md"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <Container>
          <Grid gutterMd={60} align="center">
            <Grid.Col sm={6}>
              <Generator />
            </Grid.Col>
            <Grid.Col sm={6}>
              <Hero />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
      <Box py={30} px="md">
        <Container>
          <About />
        </Container>
      </Box>
    </Layout>
  );
}
