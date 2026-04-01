'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="bg-[#F7F2EA] text-[#0D0D0D]">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#F7F2EA]/90 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-widest uppercase">MOD</span>
            <span className="text-xs tracking-[0.3em] uppercase text-black/50 font-medium">Dentist</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-black/60">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#membership" className="hover:text-black transition-colors">Membership</a>
            <a href="#" className="hover:text-black transition-colors">Reviews</a>
          </div>
          <a href="tel:2812700140" className="hidden sm:inline-block bg-black hover:bg-black/80 text-[#F7F2EA] text-xs font-bold px-6 py-3 tracking-widest uppercase transition-colors">
            (281) 270-0140
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 
          TODO: Download hero image from moddentist.com and save to /public/images/mod-dentist-hero.jpg
          Then use: backgroundImage: `url('/images/mod-dentist-hero.jpg')`
        */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/mod-dentist-hero.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/65 sm:bg-black/50" />
        <div className="absolute inset-0 bg-[#F7F2EA]/40 sm:bg-[#F7F2EA]/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-black/40 mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
              Brookshire, Texas
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
              A smile<br />worth<br />
              <span className="italic font-light">remembering.</span>
            </h1>
            <p className="text-black/60 text-base sm:text-lg max-w-md mb-10 leading-relaxed opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]">
              Family, implant, and cosmetic dentistry in a modern, welcoming space designed around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
              <a href="tel:2812700140" className="bg-black text-[#F7F2EA] font-bold px-8 py-4 text-xs tracking-widest uppercase hover:bg-black/80 transition-colors text-center">
                Book Appointment
              </a>
              <a href="#services" className="border border-black text-black font-bold px-8 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-[#F7F2EA] transition-colors text-center">
                View Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 md:right-16 z-10">
          <div className="text-xs tracking-widest uppercase text-black/30 rotate-90 origin-right">Family | Implant | Cosmetic</div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 divide-x divide-white/10">
          {[
            { label: 'Family', desc: 'Gentle, compassionate care for every member of your family.', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            )},
            { label: 'Implant', desc: 'Permanent solutions that look, feel, and function like natural teeth.', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M12 2C9.5 2 7 4 7 7c0 2 .5 3 1 5s0 5-1 8c0 1 1 2 2 1.5 1-.5 1.5-2 3-2s2 1.5 3 2c1 .5 2-.5 2-1.5-1-3-1.5-6-1-8s1-3 1-5c0-3-2.5-5-5-5z" />
                <line x1="12" y1="7" x2="12" y2="13" />
                <line x1="10" y1="9" x2="14" y2="11" />
              </svg>
            )},
            { label: 'Cosmetic', desc: 'Smile transformations designed to boost your confidence.', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            )},
          ].map((item, i) => (
            <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-black px-10 py-12 text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="text-[#C9A96E] mx-auto mb-5 flex justify-center">
                {item.icon}
              </div>
              <div className="w-8 h-px bg-[#C9A96E] mx-auto mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-white mb-3">{item.label}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT DR SHARMA */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="aspect-[3/4] bg-black/5 overflow-hidden">
              {/* TODO: Download and save to /public/images/dr-sharma.jpg */}
              <img
                src="/images/dr-sharma.jpg"
                alt="Dr. Neha Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-black/30 mb-4">Meet Your Dentist</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6">
              Dr. Neha<br />Sharma, D.D.S.
            </h2>
            <div className="w-12 h-px bg-[#C9A96E] mb-6" />
            <p className="text-black/60 leading-relaxed mb-4 text-sm sm:text-base">
              Dr. Neha Sharma founded MOD Dentist with a simple belief -- that exceptional dental care should feel as good as it looks. Her approach combines advanced techniques with a genuine passion for patient comfort.
            </p>
            <p className="text-black/60 leading-relaxed mb-8 text-sm sm:text-base">
              From routine checkups to full smile transformations, Dr. Sharma and her team are dedicated to making every visit something you actually look forward to.
            </p>
            <a href="#" className="border border-black text-black font-bold px-8 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-[#F7F2EA] transition-colors inline-block">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/30 mb-4">What We Offer</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {[
              { title: 'Dental Implants', desc: 'Permanent tooth replacement that looks and feels natural.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M12 2C9.5 2 7 4 7 7c0 2 .5 3 1 5s0 5-1 8c0 1 1 2 2 1.5 1-.5 1.5-2 3-2s2 1.5 3 2c1 .5 2-.5 2-1.5-1-3-1.5-6-1-8s1-3 1-5c0-3-2.5-5-5-5z" />
                  <line x1="12" y1="7" x2="12" y2="13" />
                  <line x1="10" y1="9" x2="14" y2="11" />
                </svg>
              )},
              { title: 'Cosmetic Veneers', desc: 'Porcelain veneers for a flawless, camera-ready smile.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M12 2C8 2 4 5 4 9c0 2.5 1 4.5 2.5 6 1 1 1.5 2.5 1.5 4v1a2 2 0 002 2h4a2 2 0 002-2v-1c0-1.5.5-3 1.5-4C19 13.5 20 11.5 20 9c0-4-4-7-8-7z" />
                  <path d="M9 22h6" />
                  <path d="M9 18h6" />
                  <path d="M12 2v4" />
                  <path d="M8 6l2 2" />
                  <path d="M16 6l-2 2" />
                </svg>
              )},
              { title: 'Invisalign', desc: 'Straighten your teeth discreetly with clear aligners.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M4 12c0-3 2-7 8-7s8 4 8 7" />
                  <path d="M4 12c0 3 2 7 8 7s8-4 8-7" />
                  <path d="M8 9v6" />
                  <path d="M12 8v8" />
                  <path d="M16 9v6" />
                </svg>
              )},
              { title: 'Teeth Whitening', desc: 'Professional-grade whitening for a brighter smile.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z" />
                </svg>
              )},
              { title: 'Dental Crowns', desc: 'Protect and restore damaged teeth with precision-fit crowns.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M2 4l3 12h14l3-12" />
                  <path d="M5 16l2 4h10l2-4" />
                  <path d="M5 4l3 6 4-4 4 4 3-6" />
                </svg>
              )},
              { title: 'Smile Makeover', desc: 'Complete smile transformation tailored to your goals.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M12 2v2" />
                </svg>
              )},
            ].map((service, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-black px-8 py-10 group cursor-pointer hover:bg-white/5 text-center sm:text-left" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-[#C9A96E] group-hover:text-white transition-colors duration-300 mb-5 flex justify-center sm:justify-start">
                  {service.icon}
                </div>
                <div className="w-6 h-px bg-[#C9A96E] mb-6 group-hover:w-10 transition-all duration-300 mx-auto sm:mx-0" />
                <h3 className="text-sm font-black uppercase tracking-widest text-white mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#" className="border border-white text-white font-bold px-8 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors inline-block">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* OFFICE PHOTOS */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
            <p className="text-xs font-bold tracking-[0.4em] uppercase text-black/30 mb-4">Our Space</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase">Designed for<br />your comfort.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* TODO: Download and save to /public/images/mod-office-1.jpg, mod-office-2.jpg, mod-office-3.jpg */}
            {[
              { src: '/images/mod-office-1.jpg', alt: 'MOD Dentist office reception area' },
              { src: '/images/mod-office-2.jpg', alt: 'MOD Dentist treatment room' },
              { src: '/images/mod-office-3.jpg', alt: 'MOD Dentist waiting lounge' },
            ].map((photo, i) => (
              <div key={i} className="reveal opacity-0 translate-y-8 transition-all duration-700 aspect-square bg-black/5 overflow-hidden" style={{ transitionDelay: `${i * 150}ms` }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* 4th image – mobile only */}
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 aspect-square bg-black/5 overflow-hidden md:hidden" style={{ transitionDelay: '450ms' }}>
              <img
                src="/images/mod-office-4.jpg"
                alt="MOD Dentist office interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership" className="bg-black py-20 px-4">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-[#C9A96E] mb-4">No Insurance? No Problem.</p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white mb-6">Membership Plan</h2>
          <p className="text-white/50 leading-relaxed mb-10 text-sm sm:text-base">
            Our in-house membership plan gives you access to quality dental care at an affordable monthly rate -- no insurance required.
          </p>
          <a href="#" className="bg-[#C9A96E] hover:bg-[#b8976a] text-white font-bold px-10 py-4 text-xs tracking-widest uppercase transition-colors inline-block">
            Learn About Membership
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0D0D] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <div className="text-2xl font-black tracking-widest uppercase text-white">MOD</div>
              <div className="text-xs tracking-[0.3em] uppercase text-white/30">Dentist</div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">Family | Implant | Cosmetic</p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Visit Us</h4>
            <p className="text-white/50 text-sm leading-relaxed">3905 11th St. Suite D<br />Brookshire, TX 77423</p>
            <a href="tel:2812700140" className="text-white/50 text-sm mt-4 inline-block hover:text-white transition-colors">(281) 270-0140</a>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/40">
              {['About', 'Services', 'Membership Plan', 'Patient Forms', 'Reviews', 'Join Our Team'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/20 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} MOD Dentist. All rights reserved.
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
        <a
          href="tel:2812700140"
          className="block w-full bg-[#C9A96E] hover:bg-[#b8976a] text-white text-center font-bold py-3 text-xs tracking-widest uppercase transition-colors"
        >
          Call Now -- (281) 270-0140
        </a>
      </div>

    </main>
  );
}