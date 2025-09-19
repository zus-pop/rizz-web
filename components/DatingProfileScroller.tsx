"use client"
import React from "react";

const profiles = [
  { name: 'Jessica', age: 28, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop' },
  { name: 'Amanda', age: 25, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
  { name: 'Chloe', age: 29, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto-format&fit=crop' },
  { name: 'Olivia', age: 26, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto-format&fit=crop' },
  { name: 'Sophia', age: 27, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto-format&fit=crop' },
  { name: 'Emily', age: 24, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto-format&fit=crop' },
  { name: 'Madison', age: 30, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto-format&fit=crop' },
];

const InfiniteMovingCards = ({ items, direction = "up", speed = "normal" }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      const getDirection = () => containerRef.current!.style.setProperty("--animation-direction", direction === "up" ? "forwards" : "reverse");
      const getSpeed = () => {
        let duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
        containerRef.current!.style.setProperty("--animation-duration", duration);
      };

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className="scroller relative z-20 h-full max-h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"
    >
      <ul ref={scrollerRef} className={`flex min-w-full shrink-0 flex-col items-center justify-center gap-4 py-4 ${start ? "animate-scroll-vertical" : ""} hover:[animation-play-state:paused]`}>
        {items.map((item, idx) => (
          <li className="relative h-[350px] w-[280px] overflow-hidden rounded-2xl shadow-lg" key={`${item.name}-${idx}`}>
            <img src={item.image} alt={item.name} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/280x350/fecaca/991b1b?text=Image+Not+Found' }} />
            <div className="absolute bottom-0 left-0 flex h-1/3 w-full flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-xl font-bold text-white">{item.name}, {item.age}</h3>
              <p className="text-sm text-white/80">New York, USA</p>
            </div>
          </li>
        ))}
      </ul>
      <style jsx global>{`
        @keyframes scroll-vertical { to { transform: translateY(calc(-50% - 0.5rem)); } }
        .animate-scroll-vertical { animation: scroll-vertical var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite; }
      `}</style>
    </div>
  );
};

export default function DatingProfileScroller() {
  const firstColumn = profiles.slice(0, 3);
  const secondColumn = profiles.slice(3, 6);
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-rose-50 p-4 rounded-lg">
      <div className="flex justify-center gap-4">
        <InfiniteMovingCards items={firstColumn} direction="up" speed="slow" />
        <div className="mt-[-150px] hidden sm:block">
          <InfiniteMovingCards items={secondColumn} direction="down" speed="normal" />
        </div>
      </div>
    </div>
  );
}