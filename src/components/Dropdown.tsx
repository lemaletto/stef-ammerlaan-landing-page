import { LinkType } from '@/types';
import Link from 'next/link';

type DropdownType = {
  items: LinkType[] | undefined;
};
export default function Dropdown({ items }: DropdownType) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2
      opacity-0 invisible
      transition-all duration-300 ease-out
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-1"
    >
      <div
        className="relative bg-white/98 backdrop-blur-xl
        shadow-2xl shadow-black/10
        border border-gray-200 rounded-2xl p-2 overflow-hidden"
      >
        {items?.map((item, key) => (
          <div key={key}>
            <Link
              href={item.link ?? '/'}
              className="relative block text-sm font-semibold text-gray-700 uppercase tracking-wider
                transition-all duration-300 py-3.5 px-5 rounded-xl
                hover:bg-gray-100 hover:text-gray-900
                hover:pl-7
                group/item
                after:content-['→'] after:absolute after:right-5 after:opacity-0
                after:transition-all after:duration-300
                hover:after:opacity-100 hover:after:right-4"
            >
              <span className="relative z-10">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
