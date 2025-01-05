import { OrbitingCircles } from "./OrbitAnimation";
import { FaGithub, FaGoogleDrive, FaWhatsapp } from 'react-icons/fa';
import { SiOpenai, SiNotion } from 'react-icons/si'; // Import SiNotion instead

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-200 to-emerald-500 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
      GlideSphere
      </span>

      <OrbitingCircles iconSize={40}>
        <Icons.whatsapp />
        <Icons.notion />
        <Icons.openai />
        <Icons.googleDrive />
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Icons.whatsapp />
        <Icons.notion />
        <Icons.openai />
        <Icons.googleDrive />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => <FaGithub size={100} color="black" />,
  notion: () => <SiNotion size={100} color="black" />,
  openai: () => <SiOpenai size={100} className="fill-black" />,
  googleDrive: () => <FaGoogleDrive size={100} color="black" />,
  whatsapp: () => <FaWhatsapp size={100} color="black" />,
};

export default OrbitingCirclesDemo;