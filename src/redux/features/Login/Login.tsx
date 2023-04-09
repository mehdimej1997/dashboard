import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Button, Heading, InputText } from '@components';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Login() {
  const [passwordIsShown, setPasswordIsShown] = useState<boolean>(false);

  const handleShowPassword = () => {
    setPasswordIsShown(!passwordIsShown);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-7"
    >
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
        <div className="flex justify-between">
          <Checkbox>Remember Me</Checkbox>
          <Link
            to="/forgot-password"
            className="font-medium text-gray opacity-70"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <Button>Login</Button>
    </motion.div>
  );
}

export default Login;
