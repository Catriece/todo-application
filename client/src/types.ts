// Login Form Validation
export interface UserInterface {
  email: string;
  username: string;
  password: string;
}

export interface UserCreationInterface extends UserInterface {
  firstName: string;
  middleName: string | "";
  lastName: string;
  birthday: string | "";
  memberStatus: string;
  defaultCircle: string;
}

export interface InitialValues {
  initialValues: UserInterface | UserCreationInterface | null;
}

export interface FormProperties extends InitialValues {
  onClick: () => {};
}
