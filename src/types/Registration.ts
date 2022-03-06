export default interface Registration {
  email: string;
  username: string;
  password: string;
}

export type RegistrationForm = Registration & { repassword : string};
