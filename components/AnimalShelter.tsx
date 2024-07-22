"use client";
import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';

export default function AnimalShelter() {
  const images = [
    { src: '/images/animal-1.jpeg', alt: 'Animal Shelter 1', width: 670, height: 503 },
    { src: '/images/animal-2.jpg', alt: 'Animal Shelter 2', width: 1200, height: 675 },
    { src: '/images/animal-3.jpg', alt: 'Animal Shelter 3', width: 800, height: 450 },
    { src: '/images/animal-4.jpg', alt: 'Animal Shelter 4', width: 540, height: 405 },
    { src: '/images/animal-5.jpg', alt: 'Animal Shelter 5', width: 1024, height: 683 },
    { src: '/images/animal-6.jpg', alt: 'Animal Shelter 6', width: 612, height: 459 },
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

      <header className="relative w-full h-[700px] mb-8 overflow-hidden fade-in">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </header>

      <section className="py-16 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">Animal Shelter</h2>
        <p className="max-w-3xl mx-auto text-lg">
          IWO, since its inception, has helped destitute animals in individual capacities through its founding members. The number of such animals is continuously rising which calls for a proper place for them where they can live, be fed, and taken care of.
        </p>
        <p className="max-w-3xl mx-auto text-lg">
          This project is very close to the heart of the founding members and efforts are underway to acquire funds and a space to establish this facility. Our goal is to create a sanctuary where animals can receive the care and love they deserve, and where they can thrive in a safe environment.
        </p>
        <p className="max-w-3xl mx-auto text-lg">
          The animal shelter will provide essential services such as medical care, food, and a comfortable living space for abandoned and rescued animals. We are also planning to offer adoption services to find loving homes for these animals.
        </p>
        <p className="max-w-3xl mx-auto text-lg">
          To make this vision a reality, we rely on the generosity of our supporters and volunteers. Your contributions can make a significant impact on the lives of these animals. Together, we can build a better future for them.
        </p>
      </section>

      <section className="py-16 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">Shelters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="text-center bg-white p-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="relative w-full h-0 pb-[calc(100%*564/1000)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
