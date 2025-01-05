import { OrbitingCircles } from "./OrbitAnimation";
import { FaGithub, FaJava, FaWhatsapp } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'; // Ensure you import SiNotion if you use it

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[400px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-200 to-emerald-500 bg-clip-text text-center text-4xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        GlideSphere
      </span>

      <OrbitingCircles iconSize={30} className="mt-6">
        <Icons.whatsapp />
        <Icons.notion />
        <Icons.openai />
        <Icons.googleDrive />
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={80} reverse speed={2} className="mt-4">
        <Icons.whatsapp />
        <Icons.notion />
        <Icons.openai />
        <Icons.googleDrive />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => <FaGithub size={60} md:size={100} color="black" />,
  notion: () => <SiMongodb size={60} md:size={100} color="green" />,
  openai: () => <SiExpress size={60} md:size={100} className="fill-indigo-400" />,
  googleDrive: () => <FaJava size={60} md:size={100} color="white" />,
  whatsapp: () => <SiTailwindcss size={60} md:size={100} color="black" />,
};

export default OrbitingCirclesDemo;
