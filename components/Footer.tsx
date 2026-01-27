"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; 2026 Hack GHRCE. All rights reserved.</p>

        <div className="flex gap-6 text-lg font-medium">
          {/* Instagram */}
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            target="_blank"
          >
            Instagram
          </a>

          {/* LinkedIn (text only) */}
          <a
            href="#"
            className="hover:text-blue-400 transition"
            target="_blank"
          >
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:hackghrce@example.com"
            className="hover:text-red-500 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
