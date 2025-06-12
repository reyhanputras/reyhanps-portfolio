export const MarqueeLeft: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full overflow-hidden sm:mt-2 mt-10 z-10">
      <div className="relative flex max-w-[90vw] overflow-hidden py-2">
        <div className="flex w-max animate-marquee">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export const MarqueeRight: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full overflow-hidden sm:mt-2 mt-10 z-10">
      <div className="relative flex max-w-[90vw] overflow-hidden py-2">
        <div className="flex w-max animate-marqueeR">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};
