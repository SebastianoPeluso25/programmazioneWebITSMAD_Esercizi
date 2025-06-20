function getWeekDay(date, lang = 'en') {
  const days = {
    en: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
    it: ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA']
  };

  const dayIndex = date.getDay(); // 0 = Sunday, 1 = Monday
  return days[lang]?.[dayIndex] || 'Invalid language';
}


const today = new Date(); 

console.log(getWeekDay(today, 'en'));
console.log(getWeekDay(today, 'it')); 