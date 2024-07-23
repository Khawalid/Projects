"use client";
import Image from 'next/image';
import { useEffect } from 'react';

export default function SchoolHealthServices() {
  const images = [
    {
      src: '/images/bus.png',
      alt: 'Healthy students are better able to learn',
    },
    {
      src: '/images/school-health-1.jpg',
      alt: 'School health screening camp',
    },
    {
      src: '/images/school-health-2.jpg',
      alt: 'Health education session',
    },
    {
      src: '/images/school-health-3.jpg',
      alt: 'Deworming camp',
    },
    {
      src: '/images/school-health-4.jpg',
      alt: 'Vaccination camp',
    },
  ];

  useEffect(() => {
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach((fadeIn) => {
      fadeIn.classList.add('fade-in-active');
    });
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">School Health Services</h2>
        <p className="max-w-3xl mx-auto text-lg px-4">
          Every year since inception, we conduct regular screening camps, deworming camps, vaccination camps, and medical drives (all free of cost) in slums (katchi abadis) of Karachi.
        </p>
        <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 my-8">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="max-w-3xl mx-auto text-lg px-4">
          <strong>Free Medical Drive Project:</strong> Every month, IWO conducts a free medical drive for screening purposes, vaccination services, health education of the community. Medical drives are conducted with donations in the form of funds, medicines, vaccines, and/or screening tools. Reports are sent to the collaborating partner.
        </p>
        <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 my-8">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="max-w-3xl mx-auto text-lg px-4">
          We have 9 state-of-the-art school health rooms working in different schools of Karachi.
        </p>
        <p className="max-w-3xl mx-auto text-lg px-4">
          <strong>Adopt A School Project:</strong> 3 adopted school health rooms giving services free of cost to the students. IWO is collaborating with organizations and companies in opening school health rooms in government schools and schools in slums (katchi abadis). The health room is named after the sponsoring organization. Technical support is provided by IWO, and running expenditures are funded by the sponsoring partner. Annually, third-party evaluation is conducted with reports submitted to the sponsoring partners.
        </p>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Health & Nutrition Services by Irteqa School Health Programme</h2>
        <p className="max-w-3xl mx-auto text-lg px-4">
          The healthy development of children and adolescents is influenced by many societal institutions. After the family, the school is the primary institution responsible for the development of young people all over the world. Schools have direct contact with more than 95 percent of the nation’s young people aged 5–17 years, for about 6 hours a day, and for up to 13 critical years of their social, psychological, physical, and intellectual development. The health of young people is strongly linked to their academic success, and their academic success is strongly linked with their health.
        </p>
        <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 my-8">
          <Image
            src={images[3].src}
            alt={images[3].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="max-w-3xl mx-auto text-lg px-4">
          Thus, helping students stay healthy is a fundamental part of the mission of schools.
        </p>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Need a School Health Program?</h2>
        <p className="max-w-3xl mx-auto text-lg px-4">
          The primary business of any school is education. However, research shows that students learn best when they are healthy, safe, and feel connected to their school. An investment in a healthy school community is an investment in student success. The healthy development of children and adolescents is influenced by many societal institutions. After the family, the school is the primary institution responsible for the development of young people all over the world.
        </p>
        <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 my-8">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="max-w-3xl mx-auto text-lg px-4">
          School health services are geared at preventing, protecting, and improving the health status of the school population to enable them to benefit fully from the school system. The school provides a unique opportunity for health education and a means of establishing a firm foundation for the healthy habits of the future adult population of any nation.
        </p>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">What Irteqa School Health Program (ISHP) Has To Offer</h2>
        <p className="max-w-3xl mx-auto text-lg px-4">
          ISHP offers comprehensive health programs and provides services in various schools. It has also adopted three schools where it is providing honorary school health services. ISHP offers the following services as part of the Onsite School Clinic/Health Room:
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-3xl text-lg px-4">
          <li>Provision / Training of on-site Medical Personnel</li>
          <li>Referrals and Counseling</li>
          <li>Health Education</li>
          <li>Health Services</li>
          <li>Nutrition Services</li>
          <li>Counseling, Psychological, and Social Services</li>
          <li>Healthy and Safe School Environment</li>
          <li>Health Promotion for Staff</li>
          <li>Family/Community Involvement</li>
          <li>Pharmacy</li>
          <li>First-Aid Training and Internship Opportunities</li>
        </ul>
      </section>
    </div>
  );
}
