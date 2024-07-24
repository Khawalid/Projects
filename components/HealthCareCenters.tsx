"use client";
import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';

export default function HealthCareCenters() {
  const images = [
    { src: '/images/elderly-1.jpg', alt: 'Elderly care 1' },
    { src: '/images/elderly-2.jpg', alt: 'Elderly care 2' },
    { src: '/images/elderly-3.jpg', alt: 'Elderly care 3' },
    { src: '/images/elderly-4.jpg', alt: 'Elderly care 4' },
    { src: '/images/elderly-5.jpg', alt: 'Elderly care 5' },
    { src: '/images/elderly-6.jpeg', alt: 'Elderly care 6' },
  ];

  useEffect(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('fade-in-active');
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Health Care Centers | Irteqa Welfare Organization</title>
        <meta name="description" content="Irteqa Welfare Organization's health care centers provide state-of-the-art facilities for the elderly in Pakistan." />
        <meta name="keywords" content="health care centers, elderly care, hospice, Pakistan, Irteqa Welfare Organization" />
      </Head>

      <header className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[700px] mb-8 overflow-hidden fade-in">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover border-2 border-black shadow-lg"
        />
      </header>

      <section className="py-16 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">Hospice For The Elderly</h2>
        <p className="max-w-3xl mx-auto text-lg px-4">
          Changing socio-economic conditions are driving a need for old-homes where aging parents can be left with experienced staff for caring.
        </p>
        <p className="max-w-3xl mx-auto text-lg px-4">
          State of the art hospice with all facilities to cater to the geriatric needs of the aging population is the need of the hour. This facility will provide a safe, nurturing environment where the elderly can receive the care they need while maintaining their dignity and quality of life.
        </p>
        <p className="max-w-3xl mx-auto text-lg px-4">
          IWO is working to generate funds for this project to ensure that no elderly individual is left without the care they deserve.
        </p>
        <p className="max-w-3xl mx-auto text-lg px-4">
          IWO will acquire a building from the government for this project and will equip it with all necessary facilities to support the health and well-being of its residents.
        </p>
      </section>

      <section className="py-16 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">Medical Camps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64 sm:h-80 md:h-96 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-lg border-2 border-black"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
