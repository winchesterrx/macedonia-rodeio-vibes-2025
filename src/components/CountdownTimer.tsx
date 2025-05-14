
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date("June 5, 2025 20:00:00").getTime();
    const updateCounter = () => {
      const now = new Date().getTime();
      const diff = eventDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-rodeo-dark border-2 border-rodeo-gold rounded-xl px-8 py-4 md:px-12 md:py-5 gold-glow shadow-lg flex flex-col items-center max-w-xl mx-auto">
      <div className="text-base md:text-lg text-rodeo-gold font-bold mb-1 tracking-wide uppercase animate-pulse-soft">
        Contagem regressiva para o evento
      </div>
      <div className="flex justify-center items-center gap-3 md:gap-6">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-rodeo-gold animate-number drop-shadow-lg">{timeLeft.days}</span>
          <span className="text-xs md:text-sm text-rodeo-gold/80 font-medium uppercase">dias</span>
        </div>
        <span className="text-rodeo-gold text-3xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-rodeo-gold animate-number drop-shadow-lg">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm text-rodeo-gold/80 font-medium uppercase">h</span>
        </div>
        <span className="text-rodeo-gold text-3xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-rodeo-gold animate-number drop-shadow-lg">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm text-rodeo-gold/80 font-medium uppercase">min</span>
        </div>
        <span className="text-rodeo-gold text-3xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-extrabold text-rodeo-gold animate-number drop-shadow-lg">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="text-xs md:text-sm text-rodeo-gold/80 font-medium uppercase">seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
