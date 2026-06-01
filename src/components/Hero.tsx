import { storeData } from '../data/store'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-stone-900">
        <img src="/images/hero.jpg" alt={storeData.name} className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/50 to-stone-900/80" />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <p className="text-white/70 text-xs tracking-[0.4em] mb-4 font-sans uppercase">
          {storeData.nameEn}
        </p>
        <h1 className="text-white font-serif text-4xl md:text-6xl font-bold tracking-widest mb-6 leading-tight">
          {storeData.name}
        </h1>
        <div className="w-16 h-px bg-white/50 mx-auto mb-6" />
        <p className="text-white/80 text-base md:text-lg font-sans tracking-wider leading-relaxed">
          {storeData.catchcopy.split('\n').map((line, i) => (
            <span key={i}>{line}{i < storeData.catchcopy.split('\n').length - 1 && <br />}</span>
          ))}
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#about" className="btn-primary shadow-lg">
            お店について
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        aria-label="下にスクロール"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
