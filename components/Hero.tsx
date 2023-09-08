import {
  Title,
  Button,
  Text,
  List,
  ThemeIcon,
  rem,
  Box,
  MediaQuery,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function Hero() {
  return (
    <Box>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Box>
          <Title fw={900} fz={rem(40)}>
            OpenPass
          </Title>
          <Text color="dimmed">
            Securely manage all your passwords right in your browser.
          </Text>
        </Box>
      </MediaQuery>

      <List
        mt="sm"
        spacing="sm"
        size="xs"
        icon={
          <ThemeIcon size="sm" radius="xl">
            <IconCheck size={12} stroke={1.5} />
          </ThemeIcon>
        }
      >
        <List.Item>
          <b>One password, any site</b> – Use one master password to generate
          strong, unique passwords for each of your online accounts.
        </List.Item>
        <List.Item>
          <b>Never stored, never shared</b> – Your passwords are generated in
          your browser and stay there, so no risk of data breaches.
        </List.Item>
        <List.Item>
          <b>Fast and free</b> – No accounts or subscriptions required, get
          started instantly.
        </List.Item>
        <List.Item>
          <b>Open source</b> – Transparent, peer-reviewed code for superior
          security.
        </List.Item>
      </List>

      <Button
        mt="xl"
        component="a"
        href="https://github.com/dasveloper/OpenPass"
        target="__blank"
        variant="default"
        leftIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width={rem(16)}
            height={rem(16)}
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        }
      >
        GitHub
      </Button>
    </Box>
  );
}
