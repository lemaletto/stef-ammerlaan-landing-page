import { LinkType } from '../types';
import Link from 'next/link';

type DropdownType = {
  items: LinkType[] | undefined;
};
export default function Dropdown({ items }: DropdownType) {
  return (
    <div className="absolute top-4.75 opacity-0 pointer-events-none pt-5.25 z-1000 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
      {items?.map((item, key) => (
        <div className="mb-3.75" key={key}>
          <Link
            href={item.link ?? '/'}
            className="relative after:content-[''] after:absolute after:-bottom-0.75 after:left-0 after:w-0 after:h-0.5 
              after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
