import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300 py-15 relative overflow-hidden">
        
        {/* LEFT TEXT */}
        <p className="text-xs text-gray-400 text-center md:text-left">
          355 Bryant Street, #403 San Francisco California 94107 <br />
          ©2016–2021 JustCall. All Rights Reserved
        </p>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-xs">
          <a href="#" className="hover:text-white transition">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            {/* Facebook */}
            <Image
                                      src="/facebook.png"
                                      alt="Facebook"
                                      width={10}
                                      height={18}
                                      className="object-cover object-top"
                                      priority
                                    />
          </a>

          <a href="#" className="hover:text-white transition">
            {/* Twitter/X */}
            <Image
                                      src="/x.png"
                                      alt="X"
                                      width={17}
                                      height={15}
                                      className="object-cover object-top"
                                      priority
                                    />
          </a>

          <a href="#" className="hover:text-white transition">
            {/* Instagram */}
            <Image
                                      src="/instagram.png"
                                      alt="Instagram"
                                      width={18}
                                      height={18}
                                      className="object-cover object-top"
                                      priority
                                    />
          </a>

          <a href="#" className="hover:text-white transition">
            {/* LinkedIn */}
            <Image
                                      src="/linkedIn.png"
                                      alt="linkedIn"
                                      width={18}
                                      height={18}
                                      className="object-cover object-top"
                                      priority
                                    />
          </a>

          <a href="#" className="hover:text-white transition">
            {/* YouTube */}
            <Image
                                      src="/youtube.png"
                                      alt="youtube"
                                      width={20}
                                      height={15}
                                      className="object-cover object-top"
                                      priority
                                    />
          </a>
        </div>
      </div>

      {/* Background Pattern (optional) */}
        <Image
                      src="/footer-img.png"
                      alt="message"
                      width={1440}
                      height={130}
                      className="object-cover object-top"
                      priority />
    </footer>
  );
}