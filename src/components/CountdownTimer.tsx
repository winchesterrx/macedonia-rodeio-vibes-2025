
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
    const eventDate = new Date("June 5, 2025").getTime();
    
    const updateCounter = () => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
      
      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000); // Update every second
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-rodeo-dark/80 px-4 py-3 rounded-lg border-2 border-rodeo-gold gold-glow text-center">
      <div className="text-sm text-rodeo-gold font-bold mb-1">MACEDÔNIA RODEIO SHOW</div>
      <div className="flex justify-center space-x-3 md:space-x-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs md:text-sm text-rodeo-gold">dias</div>
        </div>
        <div className="text-rodeo-gold text-2xl font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm text-rodeo-gold">horas</div>
        </div>
        <div className="text-rodeo-gold text-2xl font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm text-rodeo-gold">min</div>
        </div>
        <div className="text-rodeo-gold text-2xl font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm text-rodeo-gold">seg</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
