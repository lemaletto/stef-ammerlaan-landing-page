import { LinkType } from '@/types';
import Link from 'next/link';

type DropdownType = {
  items: LinkType[] | undefined;
};
export default function Dropdown({ items }: DropdownType) {
  return (
    <div
      className="absolute top-8 left-1/2 -translate-x-1/2 w-48
      opacity-0 pointer-events-none pt-2
      transition-all duration-300 ease-out
      group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-1"
    >
      <div
        className="bg-white/95 backdrop-blur-md shadow-xl shadow-black/10
        border border-gray-200/50 rounded-xl p-4 space-y-3"
      >
        {items?.map((item, key) => (
          <div key={key}>
            <Link
              href={item.link ?? '/'}
              className="relative block text-sm font-medium text-gray-700
                hover:text-black transition-all duration-200
                hover:translate-x-1
                after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5
                after:bg-linear-to-r after:from-black after:to-gray-600
                after:transition-all after:duration-300
                hover:after:w-full"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
