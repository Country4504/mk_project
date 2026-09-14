import Image from 'next/image';

const sections = [
  { title: '云安全解决方案', images: ['云安全解决方案.png'] },
  { title: '数据安全解决方案', images: ['数据安全解决方案01.png', '数据安全解决方案02.png'] },
  { title: '应用安全解决方案', images: ['应用安全解决方案.png'] },
  { title: '网络安全解决方案', images: ['网络安全解决方案.png'] },
  { title: '终端安全解决方案', images: ['终端安全解决方案.png'] },
  { title: '运维安全解决方案', images: ['运维安全解决方案.png'] },
  { title: '移动安全解决方案', images: ['移动安全解决方案.png'] },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#060B14] pt-24 pb-24 text-[#E8EDF5]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="mb-16 lg:mb-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-[#00E5FF]" />
            <span className="text-xs font-mono tracking-[.25em] text-[#00E5FF]">SECURITY SOLUTIONS</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">解决方案</h1>
        </header>
        <main className="space-y-20 lg:space-y-32">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-7 text-2xl font-bold sm:text-3xl lg:mb-10">{section.title}</h2>
              <div className="space-y-6">
                {section.images.map((image) => (
                  <div key={image} className="relative w-full overflow-hidden rounded-xl">
                    <Image src={`/Solution/${image}`} alt={section.title} width={1600} height={900} className="h-auto w-full" sizes="(max-width: 1024px) 100vw, 1152px" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
