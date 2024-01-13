
type ProjectInfoProps = {
    title: string;
    description?: string | null;
}

export default function ProjectInfo({ title, description }: ProjectInfoProps) {
  return (
    <section id="info" className="w-full h-screen">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div className="h-full z-[5] flex items-center">
        <div className="h-full flex items-center pl-10 z-10">
          <div>
            <h1 className="font-clash text-bold text-5xl md:text-9xl">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
