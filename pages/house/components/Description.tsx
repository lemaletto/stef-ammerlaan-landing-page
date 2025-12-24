import React from 'react';
import { HouseModel } from 'types';

interface DescriptionProp {
  description: HouseModel['description'] | undefined;
}
export default function Description({ description }: DescriptionProp) {
  return (
    <div className="flex items-start md:flex-col md:items-center md:gap-4">
      {description?.map((item, index) => (
        <div
          key={index}
          className={`w-35% mx-auto leading-6 text-justify md:w-11/12 ${
            item.lan === 'fr' ? 'font-bold' : 'font-light'
          }`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
