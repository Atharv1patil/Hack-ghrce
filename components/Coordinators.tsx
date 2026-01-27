"use client";

type Coordinator = {
  name: string;
  role: string;
  img: string;
};

const coordinators: Coordinator[] = [
  { name: "Alice Smith", role: "Lead Organizer", img: "https://i.pravatar.cc/150?img=1" },
  { name: "Bob Johnson", role: "Tech Head", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Charlie Lee", role: "Design Head", img: "https://i.pravatar.cc/150?img=3" },
  { name: "Diana King", role: "Operations", img: "https://i.pravatar.cc/150?img=4" },
];

export default function Coordinators() {
  return (
    <section id="coordinators" className="min-h-screen bg-black px-10 pt-24 text-white">
      <h2 className="text-4xl font-bold text-red-500 mb-8 text-center">Our Coordinators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {coordinators.map((c, i) => (
          <div key={i} className="bg-red-900/30 rounded-xl p-6 flex flex-col items-center text-center backdrop-blur-md hover:scale-105 transition-transform shadow-lg">
            <img 
              src={c.img} 
              alt={c.name} 
              className="w-28 h-28 rounded-full object-cover border-2 border-yellow-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-300">{c.name}</h3>
            <p className="text-red-200 mt-1">{c.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
