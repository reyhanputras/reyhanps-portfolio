import { CircleText } from "@/components/ui/circle-text";
import FadeContent from "@/components/ui/FadeContent";
import p1 from "@/assets/gallery/1.jpg";
import p2 from "@/assets/gallery/2.jpg";
import p3 from "@/assets/gallery/3.jpg";
import p4 from "@/assets/gallery/4.jpg";
import p5 from "@/assets/gallery/5.jpg";
import p6 from "@/assets/gallery/6.jpg";
import p7 from "@/assets/gallery/7.jpg";
import p8 from "@/assets/gallery/8.jpg";
import p9 from "@/assets/gallery/9.jpg";
import p10 from "@/assets/gallery/10.jpg";
import p11 from "@/assets/gallery/11.jpg";
import p12 from "@/assets/gallery/12.jpg";
import ChromaGrid from "@/components/ui/ChromaGrid";

const Gallery = () => {
  const items = [
    {
      image: p1.src,
      title: "Musyawarah Anggota",
      subtitle: "Korps Sukarela",
      handle: "2024",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: p2.src,
      title: "Musyawarah Mahasiswa",
      subtitle: "HIMARPL",
      handle: "2023",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
    },
    {
      image: p3.src,
      title: "Musyawarah Mahasiswa",
      subtitle: "HIMARPL",
      handle: "2023",
      borderColor: "#7209b7",
      gradient: "linear-gradient(180deg, #7209b7, #000)",
    },
    {
      image: p4.src,
      title: "Musyawarah Mahasiswa",
      subtitle: "HIMARPL",
      handle: "2023",
      borderColor: "#d62828",
      gradient: "linear-gradient(180deg, #d62828, #000)",
    },
    {
      image: p5.src,
      title: "Musyawarah Mahasiswa",
      subtitle: "HIMARPL",
      handle: "2023",
      borderColor: "#ff006e",
      gradient: "linear-gradient(180deg, #ff006e, #000)",
    },
    {
      image: p6.src,
      title: "Musyawarah Mahasiswa",
      subtitle: "HIMARPL",
      handle: "2023",
      borderColor: "#8338ec",
      gradient: "linear-gradient(180deg, #8338ec, #000)",
    },
    {
      image: p7.src,
      title: "Diklatsar",
      subtitle: "Korps Sukarela",
      handle: "2025",
      borderColor: "#3a86ff",
      gradient: "linear-gradient(180deg, #3a86ff, #000)",
    },
    {
      image: p8.src,
      title: "Diklatsar",
      subtitle: "Korps Sukarela",
      handle: "2025",
      borderColor: "#9e0059",
      gradient: "linear-gradient(180deg, #9e0059, #000)",
    },
    {
      image: p9.src,
      title: "Musyawarah Anggota",
      subtitle: "Korps Sukarela",
      handle: "2025",
      borderColor: "#05668d",
      gradient: "linear-gradient(180deg, #05668d, #000)",
    },
    {
      image: p10.src,
      title: "Diklatsar",
      subtitle: "Korps Sukarela",
      handle: "2025",
      borderColor: "#006400",
      gradient: "linear-gradient(180deg, #006400, #000)",
      url: "https://linkedi.com/in/mikechen",
    },
    {
      image: p11.src,
      title: "Latihan Kepemimpinan ",
      subtitle: "UPI Cibiru",
      handle: "2023",
      borderColor: "#f4a259",
      gradient: "linear-gradient(180deg, #f4a259, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: p12.src,
      title: "Studi Banding",
      subtitle: "Korps Sukarela",
      handle: "2024",
      borderColor: "#ee6055",
      gradient: "linear-gradient(180deg, #ee6055, #000)",
    },
  ];

  return (
    <div className="py-12 flex flex-col">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="text-center mb-12 tracking-widest">
          <CircleText text="Gallery" />
        </div>
      </FadeContent>

      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default Gallery;
