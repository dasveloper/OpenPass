export default async function generatePassword({
  masterPassword,
  site,
  config,
}: GeneratePassword) {
  // Initialize character set based on the configuration
  let charset = "";
  if (config.lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (config.uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (config.numbers) charset += "0123456789";
  if (config.symbols) charset += "!@#$%^&*()-=_+[]{}|;:',.<>?";

  // Convert master password and site to Uint8Array
  const textEncoder = new TextEncoder();
  const data = textEncoder.encode(masterPassword);
  const salt = textEncoder.encode(site + config.modifier);

  // Generate cryptographic key from master password
  const key = await window.crypto.subtle.importKey(
    "raw",
    data,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );

  // Derive bits using PBKDF2 with SHA-256
  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 10000,
      hash: "SHA-256",
    },
    key,
    config.length * 8 // Desired key length in bits
  );

  // Convert the derived bits to a Uint8Array
  const byteArray = new Uint8Array(derivedBits);

  // Generate the password using the byteArray and charset
  let generatedPassword = "";

  for (let i = 0; i < config.length; i++) {
    const byteValue = byteArray[i % byteArray.length];
    generatedPassword += charset[byteValue % charset.length];
  }

  return generatedPassword;
}
