import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Farah Ahmad",
    qualifications: "MBBS, DCPS, MCPS (HCSM), CHPE, MSBE",
    role: "Founding member, General Secretary",
    photo: "/images/team/farah.png",
  },
  {
    name: "Dr. Anwar Khan",
    qualifications: "MBBS, MPH, MBA",
    role: "Founding Member, Vice President (Overseas)",
    photo: "/images/team/anwar.png",
  },
  {
    name: "Dr. Uzma Hussain",
    qualifications: "MBBS",
    role: "President",
    photo: "/images/team/uzma.png",
  },
  {
    name: "Dr. Hasan Danish",
    qualifications: "MBBS, MPH, FCPS*",
    role: "Joint secretary",
    photo: "/images/team/hasan.png",
  },
  {
    name: "Mr. Azhar Kazmi",
    qualifications: "MA (Economics), MBA",
    role: "Founding member, Treasurer",
    photo: "/images/team/azhar.png",
  },
  {
    name: "Mr. Mushtaq Ahmad",
    qualifications: "BE, MS",
    role: "Founding member, Vice president (Overseas)",
    photo: "/images/team/mushtaq.png",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="relative w-full mb-8 z-10 overflow-hidden">
        <div className="relative w-full h-64 md:h-96 bg-gray-300 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Home Page Image Here
          </h1>
          {/* Uncomment below line if you want to add an actual image */}
          {/* <Image
            src="/images/home.jpg"
            alt="Health services for all"
            layout="fill"
            objectFit="cover"
            className="absolute w-full h-full object-cover border-2 border-black shadow-lg"
          /> */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </header>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">About IWO</h2>
        <p className="max-w-2xl mx-auto text-lg px-4">
          Irteqa Welfare Organization provides multiple health services in
          Pakistan, focusing on innovative and enduring methods in healthcare
          and research. An NPO (not for profit organization) registered with
          Social welfare department, Government of Sindh (Registration No: DSW
          (3314)-K) in 2009.
        </p>
        <div className="flex justify-center items-center gap-8 mt-8">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-black">
            <Image
              src="/images/logo.jpg"
              alt="Irteqa Welfare Organization Logo"
              layout="responsive"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-black">
            <Image
              src="/images/govt-of-sindh-logo.png"
              alt="Government of Sindh Logo"
              layout="responsive"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Vision and Mission</h2>
        <div className="flex flex-wrap justify-center items-start gap-8 px-4">
          <div className="w-full max-w-xs lg:max-w-sm mx-auto">
            <h3 className="text-xl font-bold text-green-600">Vision</h3>
            <p className="mt-2 text-lg">
              Irteqa Welfare Organization vision is to form an autonomous
              organization of distinction, primarily serving communities through
              innovative and enduring methods in health care services and health
              research.
            </p>
          </div>
          <div className="w-full max-w-xs lg:max-w-sm mx-auto">
            <h3 className="text-xl font-bold text-orange-600">Mission</h3>
            <p className="mt-2 text-lg">
              Improving health by generating local research, providing
              preventive, promotive and curative health care services to
              everyone around us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 px-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="text-center bg-blue-200 bg-opacity-50 text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-2 border-black"
            >
              <div className="w-32 h-32 mx-auto">
                <Image
                  src={member.photo}
                  alt={member.name}
                  layout="responsive"
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-gray-300"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold">{member.name}</h3>
              <p className="mt-2 text-lg">{member.qualifications}</p>
              <p className="mt-2 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
