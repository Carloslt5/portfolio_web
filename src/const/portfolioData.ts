import Email from "@components/icons/Email.astro"
import Phone from "@components/icons/Phone.astro"
import Pin from "@components/icons/Pin.astro"

export const heroContent = {
  title: "Bienvenido.",
  paragraphs: [
    "Soy Carlos, <strong>desarrollador web</strong>, con experiencia en <strong>diseño gráfico y artes gráficas.</strong>",
    "Durante <strong>mi experiencia</strong> he adquirido gran <strong>interés por integrar, implementar y dar funcionalidad</strong> en entornos diigtales.",
    "Esto me ha llevado a formarme en <strong>diseño UX/UI</strong> y <strong>desarrollo web.</strong>",
    "He logrado <strong>fortalecer mis conocimientos</strong>, realizando proyectos y trabajando en equipo.",
    "Sigo formándome diariamente, lo que me lleva a querer <strong>compartir mis conocimientos</strong> y recibir <em>feedback</em> de ello.",
  ],
}

export const proyectGroupContent = {
  title: "Proyectos",
  callToAction: "Nuestro próximo proyecto.",
}

export const contactContent = {
  formField: [
    {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Nombre",
    },
    {
      type: "text",
      id: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      type: "textarea",
      id: "textarea",
      name: "textarea",
      placeholder: "Introduce aqui tu mensaje",
    },
  ],
  formButton: {
    name: "submit",
    text: "ENVIAR",
  },

  contact: [
    {
      title: "TELÉFONO MÓVIL",
      subtitle: "+34 697 46 19 96",
      text: "Zona horaria de Madrid (GMT+1).",
      link: "https://wa.me/34697461996",
      icon: Phone,
    },
    {
      title: "LOCALIDAD",
      subtitle: "MADRID, ESPAÑA",
      text: "Para reuniones o entrevistas presenciales.",
      link: "https://www.google.es/maps/place/Madrid",
      icon: Pin,
    },
    {
      title: "CONTACTO",
      subtitle: "CONTACTAME",
      text: "Estaré encantado de responder tus dudas.",
      link: "mailto:carlos.lt97@gmail.com",
      icon: Email,
    },
  ],
}

export const footerText = "Página web realizada por Carlos Liao Trinh.<br/> ¡Gracias por visitar!"
