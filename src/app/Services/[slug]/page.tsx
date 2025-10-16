import { serviceData } from "@/app/api/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetail({ params }: Props) {
  const service = serviceData.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-16">
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={service.imgSrc}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-midnight_text mt-10 mb-4">
        {service.title}
      </h1>

      <p className="text-lg text-black/80 leading-relaxed mb-8">
        {service.description}
      </p>

      {service.details && (
        <ul className="list-disc pl-6 text-black/70 space-y-2">
          {service.details.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
