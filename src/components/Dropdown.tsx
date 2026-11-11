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
        border border-gray-200 rounded-2xl p-2 overflow-visible"
      >
        {items?.map((item, key) => (
          <div key={key} className="relative group/sub">
            {item.isLink && item.link ? (
              /* Lien direct : Tertiaires, ERP, etc. */
              <Link
                href={item.link}
                className="relative flex items-center justify-between text-sm font-semibold text-gray-700 uppercase tracking-wider
                  transition-all duration-300 py-3.5 px-5 rounded-xl
                  hover:bg-gray-100 hover:text-gray-900
                  hover:pl-7
                  after:content-['→'] after:absolute after:right-5 after:opacity-0
                  after:transition-all after:duration-300
                  hover:after:opacity-100 hover:after:right-4"
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ) : (
              /* Catégorie avec sous-éléments : Maisons individuelles */
              <div
                className="relative flex items-center justify-between text-sm font-semibold text-gray-700 uppercase tracking-wider
                  transition-all duration-300 py-3.5 px-5 rounded-xl cursor-pointer
                  hover:bg-gray-100 hover:text-gray-900
                  hover:pl-7"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="text-xs text-gray-400 group-hover/sub:text-gray-900 transition-colors">▶</span>

                {/* Sous-menu niveau 2 (Maison 0001, Maison 0002,etc.) */}
                {item.items && (
                  <div
                    className="absolute top-0 left-full pl-2 w-56
                      opacity-0 invisible
                      transition-all duration-300 ease-out
                      group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-1"
                  >
                    <div
                      className="bg-white/98 backdrop-blur-xl
                      shadow-2xl shadow-black/10
                      border border-gray-200 rounded-2xl p-2"
                    >
                      {item.items.map((subItem, subKey) => (
                        <Link
                          key={subKey}
                          href={subItem.link ?? '/'}
                          className="relative flex items-center justify-between text-xs font-semibold text-gray-600 uppercase tracking-wider
                            transition-all duration-300 py-3 px-4 rounded-xl
                            hover:bg-gray-100 hover:text-gray-900 hover:pl-6
                            after:content-['→'] after:absolute after:right-4 after:opacity-0
                            after:transition-all after:duration-300
                            hover:after:opacity-100 hover:after:right-3"
                        >
                          <span className="relative z-10">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}