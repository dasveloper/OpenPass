import { Accordion, Box, Title } from "@mantine/core";

export default function About() {
  return (
    <Box>
      <Title order={2} align="center">
        About OpenPass
      </Title>

      <Accordion mt="md" variant="separated">
        <Accordion.Item value="what-makes-OpenPass-different">
          <Accordion.Control>
            What makes OpenPass different than other password managers?
          </Accordion.Control>
          <Accordion.Panel>
            Unlike traditional password managers that store your passwords in a
            database, OpenPass generates unique passwords on-the-fly right in
            your browser. This means there&apos;s zero storage and zero risk of
            a data breach from our end.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="how-does-it-work">
          <Accordion.Control>How does OpenPass work?</Accordion.Control>
          <Accordion.Panel>
            OpenPass generates strong, unique passwords for each site you visit,
            all based on a single master password. Each time you need to login
            just enter your master password and site and your unique password
            will be generated.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="password-generation">
          <Accordion.Control>
            How are the passwords generated?
          </Accordion.Control>
          <Accordion.Panel>
            Passwords are created using a mix of your master password and the
            site name, processed through a secure cryptographic algorithm. This
            ensures each generated password is unique and strong.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="master-password">
          <Accordion.Control>What is a master password?</Accordion.Control>
          <Accordion.Panel>
            Your master password is the single key to generate all your
            site-specific passwords. It&apos;s the only password you&apos;ll
            need to remember, making your life simpler and more secure.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="store-master-password">
          <Accordion.Control>
            Do you store my master password?
          </Accordion.Control>
          <Accordion.Panel>
            No. Your master password is never stored or transmitted anywhere. It
            only exists in your browser for as long as it&apos;s needed to
            generate your site passwords.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="backup-passwords">
          <Accordion.Control>Do you store my site passwords?</Accordion.Control>
          <Accordion.Panel>
            We don&apos;t need to! Your passwords are generated on-the-fly
            whenever you need them, you just need to enter your master password.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="is-it-secure">
          <Accordion.Control>What makes OpenPass secure?</Accordion.Control>
          <Accordion.Panel>
            OpenPass uses cutting-edge cryptographic algorithms (PBKDF2 and
            SHA-256) to generate unique passwords right in your browser. These
            passwords are never stored or transmitted, eliminating the risk of
            data breaches exposing all your passwords.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="forgot-master-password">
          <Accordion.Control>
            What if I forget my master password?
          </Accordion.Control>
          <Accordion.Panel>
            If you forget your master password, there&apos;s no way to recover
            it or the site-specific passwords it generates. Make sure to keep it
            safe!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="is-it-free">
          <Accordion.Control>How much does it cost?</Accordion.Control>
          <Accordion.Panel>
            OpenPass is completely free to use. No account, no subscription, and
            no hidden costs.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="why-open-source">
          <Accordion.Control>What does open-source mean?</Accordion.Control>
          <Accordion.Panel>
            Being open-source means that anyone can review or improve the code,
            providing an extra layer of transparency and security. It&apos;s
            about building trust and ensuring the highest standards.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
