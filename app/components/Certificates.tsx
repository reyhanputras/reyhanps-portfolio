import { MarqueeLeft, MarqueeRight } from "@/components/ui/Marquee";
import FadeContent from "@/components/ui/FadeContent";
import { CircleText } from "@/components/ui/circle-text";
import c1 from "@/assets/certificates/1.png";
import c2 from "@/assets/certificates/2.png";
import c3 from "@/assets/certificates/3.png";
import c4 from "@/assets/certificates/4.png";
import c5 from "@/assets/certificates/5.png";
import c6 from "@/assets/certificates/6.png";
import c7 from "@/assets/certificates/7.png";
import c8 from "@/assets/certificates/8.png";
import c9 from "@/assets/certificates/9.png";
import c10 from "@/assets/certificates/10.png";
import c11 from "@/assets/certificates/11.png";
import c12 from "@/assets/certificates/12.png";
import c13 from "@/assets/certificates/13.png";
import c14 from "@/assets/certificates/14.png";
import c15 from "@/assets/certificates/15.png";
import c16 from "@/assets/certificates/16.png";
import Image from "next/image";

const Certificates = () => {
  const arr = [c1.src, c3.src, c4.src, c5.src, c6.src, c7.src, c8.src, c2.src];
  const arr2 = [
    c9.src,
    c10.src,
    c11.src,
    c12.src,
    c13.src,
    c14.src,
    c15.src,
    c16.src,
  ];
  return (
    <div className="py-12 flex flex-col">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="text-center mb-12">
          <CircleText text="Certificates" />
        </div>
      </FadeContent>
      <MarqueeLeft>
        {arr.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`Certificate ${index + 1}`}
            className="relative h-full w-fit mx-[4rem] object-contain"
            width={200}
            height={200}
          />
        ))}
      </MarqueeLeft>
      <div className="h-4"></div>
      <MarqueeRight>
        {arr2.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`Certificate ${index + 1}`}
            className="relative h-full w-fit mx-[4rem] object-contain"
            width={200}
            height={200}
          />
        ))}
      </MarqueeRight>
    </div>
  );
};

export default Certificates;
