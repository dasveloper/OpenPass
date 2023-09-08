type GeneratePassword = {
  masterPassword: string;
  site: string;
  config: {
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
    length: number;
  };
};
