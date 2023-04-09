import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

function Auth() {
  return (
    <div className="flex h-screen grid-cols-12 flex-col gap-12 bg-white lg:grid">
      <div className="col-span-6 flex bg-background">
        <img src="/assets/auth.svg" alt="company name" width={1200} />
      </div>
      <div className="col-start-8 col-end-12 mx-auto w-4/5 self-center">
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Auth;
