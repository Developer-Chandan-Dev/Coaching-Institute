'use client';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { Umbrella } from 'lucide-react';

const ThreeDCard = () => {
  return (
    <CardContainer className="group w-82 h-86 border bg-gray-50 rounded-md pt-1 pb-6 px-3 hover:bg-[#9469db]">
      <CardBody className="flex-center flex-col text-center gap-3 ">
        <CardItem
          translateZ="100"
          className="w-20 h-20 rounded-full border bg-[#eee7f7] flex-center dark:text-white group-hover:bg-white"
        >
          <Umbrella className="text-[#9469db] font-bold size-8" />
        </CardItem>
        <CardItem as="h4" translateZ="60" className="group-hover:text-white text-xl font-bold text-neutral-600 dark:text-white">
          Heading 4
        </CardItem>
        <CardItem as="p" translateZ="60" className="group-hover:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          voluptas maiores esse deserunt. Cupiditate, ducimus, distinctio dolor.
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCard;
