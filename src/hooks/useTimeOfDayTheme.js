import { useEffect, useMemo, useState } from 'react';

const PERIODS = [
  { id: 'dawn', start: 5, end: 8, gradient: 'linear-gradient(135deg, #F6EEE9 0%, #F5D7C4 100%)', greeting: 'Bom dia, um novo amanhecer florido!' },
  { id: 'morning', start: 8, end: 12, gradient: 'linear-gradient(135deg, #FFE8E0 0%, #FCD4D5 100%)', greeting: 'Bom dia! Vamos colorir sua manhã?' },
  { id: 'afternoon', start: 12, end: 18, gradient: 'linear-gradient(135deg, #FFD6D6 0%, #F6B2B5 100%)', greeting: 'Boa tarde! Planejando um evento encantador?' },
  { id: 'sunset', start: 18, end: 20, gradient: 'linear-gradient(135deg, #F8C1CB 0%, #E18A9C 100%)', greeting: 'Boa tarde! A luz do entardecer inspira novas histórias.' },
  { id: 'night', start: 20, end: 24, gradient: 'linear-gradient(135deg, #1C1A2D 0%, #382946 100%)', greeting: 'Boa noite! Vamos imaginar o próximo evento memorável?' },
  { id: 'late-night', start: 0, end: 5, gradient: 'linear-gradient(135deg, #201C2B 0%, #3B2A47 100%)', greeting: 'Boa noite! Ainda acordado sonhando com flores?' },
];

const getCurrentPeriod = (hours) => {
  return PERIODS.find((period) => {
    if (period.start < period.end) {
      return hours >= period.start && hours < period.end;
    }

    return hours >= period.start || hours < period.end;
  }) || PERIODS[0];
};

const useTimeOfDayTheme = () => {
  const [period, setPeriod] = useState(() => getCurrentPeriod(new Date().getHours()));

  useEffect(() => {
    const updatePeriod = () => {
      const currentHours = new Date().getHours();
      setPeriod((previous) => {
        const nextPeriod = getCurrentPeriod(currentHours);
        return previous.id === nextPeriod.id ? previous : nextPeriod;
      });
    };

    const intervalId = window.setInterval(updatePeriod, 1000 * 60); // Atualiza a cada minuto

    updatePeriod();

    return () => window.clearInterval(intervalId);
  }, []);

  const theme = useMemo(() => ({
    gradient: period.gradient,
    greeting: period.greeting,
    period: period.id,
  }), [period]);

  return theme;
};

export default useTimeOfDayTheme;

