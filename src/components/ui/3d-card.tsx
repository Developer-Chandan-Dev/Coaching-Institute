'use client';

import { cn } from '@/lib/utils';
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  ElementType,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
} from 'react';

type MouseEnterContextType = [boolean, Dispatch<SetStateAction<boolean>>];

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

// Container component
export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn('py-1 flex items-center justify-center', containerClassName)}
        style={{ perspective: '1000px' }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'flex items-center justify-center relative transition-all duration-200 ease-linear',
            className
          )}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// Body component
export const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
      className
    )}
  >
    {children}
  </div>
);

// CardItem
type CardItemBaseProps = {
  children: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
};

type CardItemProps<T extends ElementType> = CardItemBaseProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof CardItemBaseProps | 'as'>;

export const CardItem = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps<T>) => {
  const Tag = as || 'div';
  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform =
        'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    }
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  return (
    <Tag
      ref={ref as ComponentPropsWithRef<T>['ref']}
      className={cn('w-fit transition duration-200 ease-linear', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Hook
export const useMouseEnter = (): MouseEnterContextType => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider');
  }
  return context;
};
