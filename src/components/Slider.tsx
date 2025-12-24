'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

type SliderProp = {
  images: string[] | undefined;
};
export default function Slider({ images }: SliderProp) {
  const router = useRouter();
  const goToHouseProjectById = (e: React.MouseEvent, id: string) => {
    try {
      const url = `/projects/${id}`;
      router.push(url);
      return;
    } catch (error) {
      throw error;
    }
  };

  const formatImages = () => {
    if (!images) return;
    let res: { image: string; key: string }[] = [];
    for (let i = 0; i < images.length; i++) {
      res = [...res, { image: images[i], key: `000${i + 1}` }];
    }

    res = [...res, { image: '', key: '' }];

    return res.map((item, id) =>
      item.image ? (
        <button
          className="mr-2.5 h-37.5 cursor-pointer max-w-sm:max-h-full max-lg:h-90%"
          key={id}
          onClick={(e) => goToHouseProjectById(e, item.key)}
        >
          <p className="font-bold mb-1.25 text-xs">{item.key}</p>
          <div className="relative w-full h-40 max-xl:h-full max-lg:h-60 max-sm:h-40">
            <Image
              layout="fill"
              objectFit="contain"
              src={item.image}
              alt="sketch of a house under building"
            />
          </div>
        </button>
      ) : (
        <div className="flex self-center justify-center" key={id}>
          <p className="flex flex-col items-center justify-center">
            <span className="font-bold mb-1.5">Plus à venir...</span>
            <span className="font-light">More to come...</span>
          </p>
        </div>
      )
    );
  };
  return (
    <div>
      <p className="flex flex-col items-center justify-center text-sm mb-5">
        <span className="font-bold mb-1.5">Selectionnez un projet</span>
        <span className="font-light">Clic on a project</span>
      </p>

      <div className="grid grid-cols-3 gap-16 max-lg:flex max-lg:flex-col max-lg:w-full">
        {formatImages()}
      </div>
    </div>
  );
}
