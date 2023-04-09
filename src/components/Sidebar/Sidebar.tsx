import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heading, Link } from '@components';
import { MdOutlineAnalytics, MdAnalytics } from 'react-icons/md';

const TABS = [
  {
    activeIcon: <MdAnalytics size={22} />,
    inactiveIcon: <MdOutlineAnalytics size={22} />,
    title: 'Analytics',
    link: '/admin',
  },
  {
    activeIcon: <MdAnalytics size={22} />,
    inactiveIcon: <MdOutlineAnalytics size={22} />,
    title: 'Analytics',
    link: '/test',
  },
  {
    activeIcon: <MdAnalytics size={22} />,
    inactiveIcon: <MdOutlineAnalytics size={22} />,
    title: 'Analytics',
    link: '/test2',
  },
];

function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <aside className="h-screen w-80 border-r-[1px] border-black/10">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="px-8"
      >
        <Heading className="py-12">LOGO</Heading>
        <p className="text-sm font-medium text-blue">DASHBOARDS</p>
        <ul className="my-4">
          {TABS.map(({ activeIcon, inactiveIcon, title, link }) => (
            <Link
              key={title}
              to={link}
              activeIcon={activeIcon}
              inactiveIcon={inactiveIcon}
              title={title}
            />
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}

export default Sidebar;
