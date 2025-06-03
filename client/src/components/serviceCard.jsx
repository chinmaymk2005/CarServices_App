import { Car, Paintbrush, CalendarCheck } from "lucide-react";

const services = [
  { icon: <Car size={28} />, title: "Full Car Servicing", desc: "Complete engine, brake & oil check." },
  { icon: <Paintbrush size={28} />, title: "Scratch Removal", desc: "Remove dents, scratches & polish." },
  { icon: <CalendarCheck size={28} />, title: "Book Online", desc: "Easy online appointment booking." },
];

export default function ServiceCard() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {services.map((s, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
          <div className="mx-auto mb-4 text-blue-600">{s.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
          <p className="text-gray-600">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
