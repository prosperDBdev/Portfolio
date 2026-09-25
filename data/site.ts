export const site = {
  name: "Ebitimi Ebelike",
  fullName: "Ebitimi Ifeshile Ebelike",
  role: "Full-Stack Developer",
  focus: "Java & Spring Boot",
  location: "Lagos, Nigeria",
  url: "https://ebitimi.dev",
  email: "ebelikeebitimi6678@gmail.com",
  github: "https://github.com/Ebitimiebelike",
  linkedin: "https://www.linkedin.com/in/ebitimi-ebelike-23469836a",
  resume: "/resume/Ebitimi_Ebelike_Resume.pdf",
  description:
    "Full-stack developer in Lagos building backend systems in Java and Spring Boot with React and Next.js on top. Real-time messaging, offline-first apps and production client work.",
};

// The order of the journey. Used by the header, the hero index and the
// "next chapter" links, so section ids only live in one place.
export const chapters = [
  { id: "about", number: "01", label: "Introduction", nav: "About" },
  { id: "work", number: "02", label: "Selected work", nav: "Work" },
  { id: "thinking", number: "03", label: "How I think", nav: "Thinking" },
  { id: "stack", number: "04", label: "Stack", nav: null },
  { id: "record", number: "05", label: "Track record", nav: null },
  { id: "contact", number: "06", label: "Contact", nav: "Contact" },
] as const;

export type ChapterId = (typeof chapters)[number]["id"];
