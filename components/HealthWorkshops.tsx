"use client";
import Image from 'next/image';
import Head from 'next/head';
import { useEffect } from 'react';

export default function MedicalResearch() {
  const images = [
    { src: '/images/workshop-1.jpg', alt: 'Workshop 1' },
    { src: '/images/workshop-2.jpg', alt: 'Workshop 2' },
    { src: '/images/workshop-3.png', alt: 'Workshop 3' },
    { src: '/images/workshop-4.png', alt: 'Workshop 4' },
    { src: '/images/workshop-5.jpg', alt: 'Workshop 5' },
    { src: '/images/workshop-6.jpg', alt: 'Workshop 6' },
  ];

  useEffect(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('fade-in-active');
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Medical Research | Irteqa Welfare Organization</title>
        <meta name="description" content="Irteqa Welfare Organization's medical research initiatives aim to transform the way research is conducted and shared." />
        <meta name="keywords" content="medical research, nonprofit, science, Irteqa Welfare Organization, Pakistan" />
      </Head>

      <header className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[700px] mb-8 overflow-hidden fade-in">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
          className="absolute border-2 border-black shadow-lg"
        />
      </header>

      <section className="py-12 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-4">NON-Profit Medical Research</h2>
        <p className="max-w-3xl mx-auto text-lg mb-4 px-4">
          Offering the opportunity to transform the way research is conducted and shared, accelerating those processes through which it will be increasingly possible to make science more open, efficient, and collaborative.
        </p>
        <p className="max-w-3xl mx-auto text-lg mb-4 px-4">
          In the scientific field, we are aiming for tangible cultural transformation that is intended to renovate the way that different research projects are developed and executed. At the center of this change is non-profit medical research.
        </p>
        <p className="max-w-3xl mx-auto text-lg mb-4 px-4">
          To spring rise to a unique ecosystem in which health and research are mutually dependent, it is obligatory to implement a series of initiatives that serve to achieve:
        </p>
        <p className='text-3xl font-bold mb-4'>We offer free Support for Medical Research</p>
        <ul className="max-w-3xl mx-auto text-lg list-disc list-inside mb-4 px-4 text-left">
          <li>Free of cost; young researcher’s capacity and capabilities enhancements through training and lectures.</li>
          <li>Complimentary mentorship programs and continuous guidance to novice medical researchers through collaborating panel of experts working as volunteers.</li>
          <li>Free review of research designs & methodologies, research synopsis, data questionnaires, data collection tools, and statistical analysis.</li>
          <li>Uncompensated medical editing review for beginners in the field of medical research.</li>
        </ul>
      </section>

      <section className="py-2 text-center fade-in bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64 sm:h-80 md:h-96 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg border-2 border-black shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-12 bg-gray-100 text-center fade-in">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="flex flex-col md:flex-row items-center justify-around px-4">
          <div className="flex flex-col items-center md:items-center mb-8 md:mb-0 md:mr-8 w-full md:w-auto">
            <Image
              src="/images/Shain.png"
              alt="Dr. Shian Angelo"
              width={300}
              height={300}
              className="rounded-lg border-2 border-black shadow-lg"
            />
            <div className="mt-4 text-left w-full md:w-auto md:text-center">
              <h3 className="text-xl font-bold">Dr. Shian Angelo</h3>
              <p>B.D.S, MS (HCSM)</p>
              <p>Lecturer & practicing dentist</p>
              <p>Ziauddin University, Karachi</p>
            </div>
          </div>
          <div className="max-w-lg text-xl font-extrabold">
            <p className="mb-4">“My passionate mentor continuously guided me to conclude my research project. It was an amazing journey full of learning and now I feel that I am capable to manage future assignment independently.”</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around px-4 mt-16">
          <div className="flex flex-col items-center md:items-center mb-8 md:mb-0 md:mr-8 w-full md:w-auto">
            <Image
              src="/images/Sikendar.jpg"
              alt="Dr. Sikandar Shahzad Imran"
              width={300}
              height={300}
              className="rounded-lg border-2 border-black shadow-lg"
            />
            <div className="mt-4 text-left w-full md:w-auto md:text-center">
              <h3 className="text-xl font-bold">Dr. Sikandar Shahzad Imran</h3>
              <p>M.B.B.S, MD, DABIM, MCPS (HCSM)</p>
              <p>Associate Medical Director</p>
              <p>Rehman Medical Institute, Peshawar</p>
            </div>
          </div>
          <div className="max-w-lg text-xl font-extrabold">
            <p className="mb-4">“Unconditional sustenance for pulling my research project all the way!... from idea generation to publication. Now I feel more confident.”</p>
          </div>
        </div>
      </section>
    </div>
  );
}
