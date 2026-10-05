import comingSoon from "../assets/Coming Soon.png";
import temp from "../assets/Temp.png";
import day1 from "../assets/Day1-Morning.png";
import day1Dark from "../assets/Day1-Morning-Dark.png";
import day2 from "../assets/Day2-Light.png";
import day2Dark from "../assets/Day2-Light-Dark.png";
import day3 from "../assets/Day3-Small.png";
import day3Dark from "../assets/Day3-Small-Dark.png";
import day4 from "../assets/Day4-Cat.png";
import day4Dark from "../assets/Day4-Cat-Dark.png";
export const drawings = [
  { day: 1, prompt: "Morning", date: "Oct 01", image: day1, imageDark: day1Dark },
  { day: 2, prompt: "Light", date: "Oct 02", image: day2, imageDark: day2Dark },
  { day: 3, prompt: "Small", date: "Oct 03", image: day3, imageDark: day3Dark },
  { day: 4, prompt: "Cat", date: "Oct 04", image: day4, imageDark: day4Dark },
  { day: 5, prompt: "Sky", date: "Oct 05", image: comingSoon },
  { day: 6, prompt: "Mauritian Bird", date: "Oct 06", image: comingSoon },
  { day: 7, prompt: "Wild Sea Life", date: "Oct 07", image: comingSoon },
  { day: 8, prompt: "One Big Toe", date: "Oct 08", image: comingSoon },
  { day: 9, prompt: "Hollow", date: "Oct 09", image: comingSoon },
  { day: 10, prompt: "Isolated", date: "Oct 10", image: comingSoon },
  { day: 11, prompt: "Cold", date: "Oct 11", image: comingSoon },
  { day: 12, prompt: "Blind", date: "Oct 12", image: comingSoon },
  { day: 13, prompt: "Stare-Off", date: "Oct 13", image: comingSoon },
  { day: 14, prompt: "Enermy", date: "Oct 14", image: comingSoon },
  { day: 15, prompt: "Jump", date: "Oct 15", image: comingSoon },
  { day: 16, prompt: "Speed", date: "Oct 16", image: comingSoon },
  { day: 17, prompt: "Multiply", date: "Oct 17", image: comingSoon },
  { day: 18, prompt: "Giant", date: "Oct 18", image: comingSoon },
  { day: 19, prompt: "Mecha", date: "Oct 19", image: comingSoon },
  { day: 20, prompt: "Explosion", date: "Oct 20", image: comingSoon },
  { day: 21, prompt: "An Alient on His Planet", date: "Oct 21", image: comingSoon },
  { day: 22, prompt: "Tornado", date: "Oct 22", image: comingSoon },
  { day: 23, prompt: "Aura", date: "Oct 23", image: comingSoon },
  { day: 24, prompt: "Twist", date: "Oct 24", image: comingSoon },
  { day: 25, prompt: "Time", date: "Oct 25", image: comingSoon },
  { day: 26, prompt: "Flag", date: "Oct 26", image: comingSoon },
  { day: 27, prompt: "Accomplished", date: "Oct 27", image: comingSoon },
  { day: 28, prompt: "Crowds", date: "Oct 28", image: comingSoon },
  { day: 29, prompt: "Hope", date: "Oct 29", image: comingSoon },
  { day: 30, prompt: "A Platypus!", date: "Oct 30", image: comingSoon },
  { day: 31, prompt: "Shattered", date: "Oct 31", image: comingSoon },
];

export const formatDay = (day) => String(day).padStart(2, "0");

export const isComingSoon = (drawing) => drawing.image === comingSoon;
