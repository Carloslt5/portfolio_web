export enum SectionIds {
  ABOUT_ME = "about-me",
  PROJECT_GROUP = "proyect-group",
  CONTACT = "contact",
  FOOTER = "footer",
}

export const menuItems = [
  { name: "Sobre mi", href: `/#${SectionIds.ABOUT_ME}` },
  { name: "Proyectos", href: `/#${SectionIds.PROJECT_GROUP}` },
  { name: "Contacto", href: `/#${SectionIds.CONTACT}`, custom: true },
]
