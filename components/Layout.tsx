import type { ReactNode } from "react";
import {
  Header,
  Box,
  Text,
  Footer,
  Container,
  ActionIcon,
} from "@mantine/core";
import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars, IconBrandGithub } from "@tabler/icons-react";

export default function Layout({ children }: { children: ReactNode }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Box mih="100vh" sx={{ display: "flex", flexDirection: "column" }}>
      <Header height="auto" p="sm">
        <Container>
          <Group position="apart">
            <Text inline>OpenPass Logo</Text>
            <Switch
              checked={colorScheme === "dark"}
              onChange={() => toggleColorScheme()}
              size="md"
              onLabel={
                <IconSun color={theme.white} size="1.125rem" stroke={1.5} />
              }
              offLabel={
                <IconMoonStars
                  color={theme.colors.gray[6]}
                  size="1.125rem"
                  stroke={1.5}
                />
              }
            />
          </Group>
        </Container>
      </Header>
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Footer height="auto" p="sm">
        <Container>
          <Group position="apart">
            <Text color="dimmed" size="sm">
              © {new Date().getFullYear()} OpenPass. All rights reserved.
            </Text>
            <ActionIcon
              component="a"
              href="https://github.com/dasveloper/OpenPass"
              target="__blank"
              size="lg"
            >
              <IconBrandGithub size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </Footer>
    </Box>
  );
}
