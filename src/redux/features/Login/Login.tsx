import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Button, Heading, InputText } from '@components';

function Login() {
  const [passwordIsShown, setPasswordIsShown] = useState<boolean>(false);

  const handleShowPassword = () => {
    setPasswordIsShown(!passwordIsShown);
  };

  return (
    <div className="flex flex-col gap-7">
      <Heading>Login</Heading>
      <p className="text-sm text-gray opacity-40">
        Welcome back, please login to your account
      </p>

      <form className="flex flex-col gap-3">
        <InputText label="Username" />
        <InputText
          label="Password"
          type={passwordIsShown ? 'text' : 'password'}
          icon={passwordIsShown ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          iconOnClick={handleShowPassword}
        />
        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
