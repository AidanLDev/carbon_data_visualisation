import Image from "next/image";

export default function Header() {
  return (
    <header className="h-20 p-8 flex items-center">
      <a href="https://processvision.com/" target="_blank">
        <Image
          height={55}
          width={185}
          src="/images/process_vision_logo.webp"
          alt="Process Vision logo with text process vision"
        />
      </a>
    </header>
  );
}
