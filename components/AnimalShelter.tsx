"use client";
import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';

export default function AnimalShelter() {
  const images = [
    { src: '/images/animal-1.jpg', alt: 'Animal Shelter 1', width: 960, height: 1280 },
    { src: '/images/animal-5.jpg', alt: 'All destitute animals need care. Volunteering and sharing love is a great way to escape from worries of life.', width: 1280, height: 960 },
    { src: '/images/animal-6.jpg', alt: 'Animal Shelter 6', width: 1280, height: 960 },
    { src: '/images/animal-7.jpg', alt: 'Animal Shelter 7', width: 960, height: 1280 },
    { src: '/images/animal-8.jpg', alt: 'Animal Shelter 8', width: 640, height: 480 },
    { src: '/images/animal-9.jpg', alt: 'Animal Shelter 9', width: 480, height: 270 },
  ];

  useEffect(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('fade-in-active');
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Animal Shelter | Irteqa Welfare Organization</title>
        <meta name="description" content="Irteqa Welfare Organization's Animal Shelter helps destitute animals by providing a safe place for them to live, be fed, and taken care of." />
        <meta name="keywords" content="animal shelter, animal care, animal rescue, Pakistan, Irteqa Welfare Organization" />
      </Head>

      <header className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[600px] 2xl:h-[800px] mb-8 overflow-hidden fade-in">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover border-2 border-black shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            “Last year I was traveling for a week with family. I was worried about my dog. IWO took care of my worries, without charge.”
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">Love for Animals</h2>
        <p className="max-w-3xl mx-auto text-lg px-4">
          IWO, since its inception, has helped destitute animals in individual capacities through its founding members. The number of such animals is continuously rising which calls for a proper place for them where they can live, be fed, and taken care of.
        </p>
        <p className="max-w-3xl mx-auto text-lg px-4">
          This project is very close to the heart of the founding members and efforts are underway to acquire funds and a space to establish this facility. Our goal is to create a sanctuary where animals can receive the care and love they deserve, and where they can thrive in a safe environment.
        </p>
        <p className="max-w-3xl mx-auto text-lg px-4">
          The animal shelter will provide essential services such as medical care, food, and a comfortable living space for abandoned and rescued animals. We are also planning to offer adoption services to find loving homes for these animals.
        </p>
        <p className="max-w-3xl mx-auto text-lg px-4">
          To make this vision a reality, we rely on the generosity of our supporters and volunteers. Your contributions can make a significant impact on the lives of these animals. Together, we can build a better future for them.
        </p>
      </section>

      <section className="py-2 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">Love for Animals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {images.map((image, index) => (
            <div key={index} className="text-center bg-white p-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border-2 border-black shadow-lg"
                />
              </div>
              {image.alt === 'All destitute animals need care. Volunteering and sharing love is a great way to escape from worries of life.' && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <p className="text-xs sm:text-sm md:text-base">{image.alt}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
