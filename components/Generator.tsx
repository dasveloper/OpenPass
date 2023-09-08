import generatePassword from "@/lib/generatePassword";
import {
  Card,
  Group,
  Switch,
  Text,
  Stack,
  Button,
  PasswordInput,
  TextInput,
  NumberInput,
  ActionIcon,
  CopyButton,
  Collapse,
  rem,
  Title,
  MediaQuery,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { useForm } from "@mantine/form";
import {
  IconClipboard,
  IconClipboardCheck,
  IconSettings,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Generator() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const form = useForm({
    initialValues: {
      masterPassword: "",
      site: "",
      config: {
        length: 20,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        modifier: "",
      },
    },
  });

  const handleGeneratePassword = async ({
    masterPassword,
    site,
    config,
  }: GeneratePassword) => {
    const noCharsets = !Object.values(config).some((set) => set === true);
    if (noCharsets) {
      notifications.show({
        color: "red",
        title: "Invalid configuration",
        message: "You must select at least on character set",
      });
      return;
    }
    const password = await generatePassword({ masterPassword, site, config });

    setGeneratedPassword(password);
  };

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Box mb="xl">
          <Title fw={900} fz={rem(32)}>
            OpenPass
          </Title>
          <Text color="dimmed">
            Securely manage all your passwords right in your browser.
          </Text>
        </Box>
      </MediaQuery>
      <form onSubmit={form.onSubmit(handleGeneratePassword)}>
        <Stack>
          <Card withBorder shadow="sm" radius="md" p="xl">
            <Stack>
              <PasswordInput
                label="Master password"
                description="Your secure master password for generating site passwords"
                withAsterisk
                required
                {...form.getInputProps("masterPassword")}
              />
              <TextInput
                label="Site name or URL"
                description="Site you're generating a password for"
                withAsterisk
                required
                placeholder="e.g., Facebook or facebook.com"
                {...form.getInputProps("site")}
              />
              <TextInput
                variant="filled"
                label="Generated password"
                readOnly
                value={generatedPassword}
                rightSection={
                  <CopyButton value={generatedPassword}>
                    {({ copied, copy }) => (
                      <ActionIcon disabled={!generatedPassword} onClick={copy}>
                        {copied ? (
                          <IconClipboardCheck size="1.1rem" stroke={1.5} />
                        ) : (
                          <IconClipboard size="1.1rem" stroke={1.5} />
                        )}
                      </ActionIcon>
                    )}
                  </CopyButton>
                }
              />
            </Stack>
            <Button mt="xl" fullWidth type="submit">
              Generate password
            </Button>
          </Card>
          <Card withBorder shadow="sm" radius="md" p="xl">
            <Card.Section inheritPadding py="xs">
              <Group position="apart">
                <Text weight={500}>Password configuration</Text>
                <ActionIcon onClick={toggle}>
                  <IconSettings size="1rem" />
                </ActionIcon>
              </Group>
              <Collapse mt="md" in={opened}>
                <Stack>
                  <Group position="apart" noWrap spacing="xl">
                    <Text>Password length</Text>
                    <NumberInput
                      hideControls
                      defaultValue={20}
                      size="xs"
                      min={8}
                      styles={{
                        input: {
                          width: 50,
                          textAlign: "center",
                        },
                      }}
                      {...form.getInputProps("config.length")}
                    />
                  </Group>
                  <Group position="apart" noWrap spacing="xl">
                    <Text>Lowercase letters (abc)</Text>
                    <Switch
                      size="md"
                      {...form.getInputProps("config.lowercase", {
                        type: "checkbox",
                      })}
                    />
                  </Group>
                  <Group position="apart" noWrap spacing="xl">
                    <Text>Uppercase letters (ABC)</Text>
                    <Switch
                      size="md"
                      {...form.getInputProps("config.uppercase", {
                        type: "checkbox",
                      })}
                    />
                  </Group>
                  <Group position="apart" noWrap spacing="xl">
                    <Text>Numbers (123)</Text>
                    <Switch
                      size="md"
                      {...form.getInputProps("config.numbers", {
                        type: "checkbox",
                      })}
                    />
                  </Group>
                  <Group position="apart" noWrap spacing="xl">
                    <Text>Symbols (!@#)</Text>
                    <Switch
                      size="md"
                      {...form.getInputProps("config.symbols", {
                        type: "checkbox",
                      })}
                    />
                  </Group>
                  <Group position="apart" noWrap spacing="xl">
                    <Text>Modifier</Text>
                    <TextInput
                      size="xs"
                      min={8}
                      styles={{
                        input: {
                          width: 50,
                          textAlign: "center",
                        },
                      }}
                      {...form.getInputProps("config.modifier")}
                    />
                  </Group>
                </Stack>
              </Collapse>
            </Card.Section>
          </Card>
        </Stack>
      </form>
    </>
  );
}
