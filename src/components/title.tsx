interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  const titleStyle = `text-8xl font-extrabold duration-200 text-center text-gray-800 pb-5`;
  return (
    <>
      <h1 className={titleStyle}>{text}</h1>
    </>
  );
}
