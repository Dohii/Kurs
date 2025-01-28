import { createContext, useContext, useState } from "react";

const AboutUsContext = createContext(null);

export const AboutUsProvider = ({ children }) => {
  const [team, setTeam] = useState([
    {
      id: 0,
      name: "Hidajet",
      last_name: "Papučić",
      image: "https://picsum.photos/200/300",
      role: "Instructor",
    },
    {
      id: 1,
      name: "Haris",
      last_name: "Kablar",
      image: "https://picsum.photos/200/300",
      role: "Student",
    },
    {
      id: 2,
      name: "Selma",
      last_name: "unknown",
      image: "https://picsum.photos/200/300",
      role: "Student",
    },
    {
      id: 3,
      name: "Alem",
      last_name: "unknown",
      image: "https://picsum.photos/200/300",
      role: "Student",
    },
    {
      id: 4,
      name: "Nikola",
      last_name: "Kujundžija",
      image: "https://picsum.photos/200/300",
      role: "Student",
    },
    {
      id: 5,
      name: "Tony",
      last_name: "Stark",
      image: "https://picsum.photos/200/300",
      role: "Genius, billionaire",
    },
  ]);

  const [FAQData, setFAQData] = useState([
    {
      question: "Kako upisati kurs?",
      answer:
        "Vrlo lako! Preuzmite primjerak uplatnice na našem sajtu i slijedite uputstva. Potvrdu o uplati dostaviti na adresu Academy387",
    },
    {
      question: "Šta Vam je potrebno?",
      answer: "Na kurs je potrebno ponijeti vlastiti laptop i dobru volju",
    },
    {
      question: "Koje su prednosti React-a?",
      answer:
        "React ima jednostavan API i koristi JavaScript, pa programeri koji već poznaju JavaScript mogu relativno brzo usvojiti React. Također ima i veliku zajednicu koja nudi podršku.",
    },
    {
      question: "Da li je React dobar za početnike?",
      answer:
        "Da, React je vrlo popularan i ima veliku dokumentaciju, što ga čini pogodnim za početnike. Ipak, potrebno je razumjeti osnove JavaScript-a.",
    },
  ]);

  return (
    <AboutUsContext.Provider
      value={{
        setTeam,
        team,
        FAQData,
        setFAQData,
      }}
    >
      {children}
    </AboutUsContext.Provider>
  );
};
export const useAboutUsContext = () => {
  const context = useContext(AboutUsContext);
  if (!context) {
    throw new Error("Error using AboutUsContext");
  }
  return context;
};
