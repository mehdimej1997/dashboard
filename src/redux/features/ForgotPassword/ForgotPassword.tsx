import { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button, Heading, InputText } from '../../../components';

const zodEmail = z.string().email();

function ForgotPassword() {
  const [email, setEmail] = useState<string>('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-7"
    >
      <Heading>Recover Password</Heading>
      <p className="text-sm text-gray opacity-40">
        We’ll e-mail you instructions on how to reset your password.
      </p>

      <form className="flex flex-col gap-3">
        <InputText
          label="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          error={!!email.length && !zodEmail.safeParse(email).success}
        />
      </form>
      <div className="flex flex-col gap-2">
        <Button disabled={!zodEmail.safeParse(email).success}>
          Reset Password
        </Button>
        <div className="text-center font-medium ">
          <p className="inline-block opacity-70">Go back </p>
          <Link to="/" className="text-blue ">
            {' '}
            Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ForgotPassword;
