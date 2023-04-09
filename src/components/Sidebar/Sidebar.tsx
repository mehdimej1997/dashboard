import { motion } from 'framer-motion';
import { MdAnalytics } from 'react-icons/md';
import { BiCollapseHorizontal } from 'react-icons/bi';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Heading from '../Heading';

type MenuItem = Required<MenuProps>['items'][number];

function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { pathname } = useLocation();
  const myItems: MenuItem[] = [
    {
      label: <Link to="/admin">Analytics</Link>,
      key: '/admin',
      icon: <MdAnalytics size={22} />,
    },
    {
      label: 'Analytics',
      key: '/tab1',
      icon: <MdAnalytics size={22} />,
      children: [
        {
          label: <Link to="/admin/tab1">Analytics</Link>,
          key: '/admin/tab1',
          icon: <MdAnalytics size={22} />,
        },
      ],
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className="relative hidden h-screen w-fit border-r-[1px] border-secondary md:block">
      <button
        type="button"
        onClick={toggleCollapsed}
        className="absolute right-2"
      >
        <BiCollapseHorizontal size={26} />
      </button>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="px-6"
      >
        {!collapsed && (
          <>
            <Heading className="py-12 text-primary">LOGO</Heading>
            <p className="text-sm font-medium text-blue">DASHBOARDS</p>
          </>
        )}

        <Menu
          defaultSelectedKeys={[pathname]}
          mode="inline"
          inlineCollapsed={collapsed}
          className={`h-full bg-transparent py-8 text-sm font-medium ${
            collapsed ? 'w-16' : 'w-64'
          }`}
          items={myItems}
        />
      </motion.div>
    </aside>
  );
}

export default Sidebar;
