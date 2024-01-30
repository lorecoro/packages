import Image from 'next/image';

export default function Logo() {
  return (
    <div className={`img flex flex-row items-center leading-none`}>
      <Image
        src="/packages-logo.png"
        width={160}
        height={160}
        alt="Logo"
      />
    </div>
  );
}
