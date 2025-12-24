import { navbarLinks } from '../mock/data';
import Dropdown from './Dropdown';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { appVariant } from '../variants/app.variant';
import Link from 'next/link';

export default function Navbar() {
  const { loading } = useApp();

  return !loading ? (
    <motion.nav
      className="w-11/12 mx-auto p-5 md:w-full md:p-0"
      variants={appVariant}
      initial="initial"
      animate="animate"
    >
      <ul className="flex items-center md:w-7/10 md:mx-auto md:justify-between">
        {navbarLinks.map((item, index) =>
          item.isLink ? (
            <Link
              key={index}
              href={item.link ?? '/'}
              className="relative cursor-pointer mr-10 text-base uppercase font-medium md:mr-5 md:last:mr-0 
                after:content-[''] after:absolute after:-bottom-0.75 after:left-0 after:w-0 after:h-0.5 
                after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ) : (
            <div
              className="relative cursor-pointer mr-10 text-base uppercase font-medium md:mr-5 md:last:mr-0
                group"
              key={index}
            >
              <span
                className="relative after:content-[''] after:absolute after:-bottom-0.75 after:left-0 after:w-0 after:h-0.5 
                after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {item.name}
              </span>
              <Dropdown items={item.items} />
            </div>
          )
        )}
      </ul>
    </motion.nav>
  ) : (
    <></>
  );
}
