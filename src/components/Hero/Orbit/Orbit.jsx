import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FaWhatsapp, FaNotion, FaOpenai, FaGoogleDrive } from 'react-icons/fa';

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span>

      <OrbitingCircles iconSize={40}>
        <FaWhatsapp />
        <FaNotion />
        <FaOpenai />
        <FaGoogleDrive />
        <FaWhatsapp />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <FaWhatsapp />
        <FaNotion />
        <FaOpenai />
        <FaGoogleDrive />
      </OrbitingCircles>
    </div>
  );
}