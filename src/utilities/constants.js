// --------------------------------------------------------------------------------------------------------//
// Primary color constants for the theme
export const PRIMARY_MAIN = "#444E56";
export const primary_50 = "#E7B00C";

// Background color constants
export const SECONDARY_MAIN = "#D3D3D3";

// Chat component background colors
export const CHAT_BODY_BACKGROUND = "#FFFFFF";
export const CHAT_LEFT_PANEL_BACKGROUND = "#444E56";
export const ABOUT_US_HEADER_BACKGROUND = "#FFFFFF";
export const FAQ_HEADER_BACKGROUND = "#FFFFFF";
export const ABOUT_US_TEXT = "#FFFFFF";
export const FAQ_TEXT = "#FFFFFF";
export const HEADER_BACKGROUND = "#FFFFFF";
export const HEADER_TEXT_GRADIENT = "#444E56";

// Message background colors
export const BOTMESSAGE_BACKGROUND = "#F5F5F5";
export const USERMESSAGE_BACKGROUND = "#FFEFCA";

// --------------------------------------------------------------------------------------------------------//

// Text Constants
export const TEXT = {
  EN: {
    APP_NAME: "Kelvyn Park",
    APP_ASSISTANT_NAME: "Kelvyn Park Chat Assistant",
    ABOUT_US_TITLE: "About us",
    ABOUT_US: "Our virtual chat assistant Luisa is here to help get your questions answered quickly",
    FAQ_TITLE: "Frequently Asked Questions",
    FAQS: [
      "What are the school hours?",
      "What core values does the school have?",
      "What academic programs are offered?",
      "What sports are offered at the school?",
      "How do I get involved in the school?"
    ],
    CHAT_HEADER_TITLE: "Kelvyn Park Chat Assistant",
    CHAT_INPUT_PLACEHOLDER: "Type a Query...",
    HELPER_TEXT: "Cannot send empty message",
    SPEECH_RECOGNITION_START: "Start Listening",
    SPEECH_RECOGNITION_STOP: "Stop Listening",
    SPEECH_RECOGNITION_HELPER_TEXT: "Stop speaking to send the message"
  },
  ES: {
    APP_NAME: "Kelvyn Park",
    APP_ASSISTANT_NAME: "Asistente de Chat de Kelvyn Park",
    ABOUT_US_TITLE: "Acerca de Nosotros",
    ABOUT_US: "¡Bienvenido robot de chat de Kelvyn Park! Estamos aquí para ayudarle a acceder rápidamente a la información relevante.",
    FAQ_TITLE: "Preguntas frecuentes",
    FAQS: [
      "¿Cuáles son los horarios escolares?",
      "¿Cuáles son los valores fundamentales de la escuela?",
      "¿Qué programas académicos se ofrecen?",
      "¿Qué deportes se ofrecen en la escuela?",
      "¿Cómo puedo involucrarme en la escuela?"
    ],
    CHAT_HEADER_TITLE: "Asistente de Chat de Kelvyn Park",
    CHAT_INPUT_PLACEHOLDER: "Escribe una consulta...",
    HELPER_TEXT: "No se puede enviar un mensaje vacío",
    SPEECH_RECOGNITION_START: "Comenzar a escuchar",
    SPEECH_RECOGNITION_STOP: "Dejar de escuchar",
    SPEECH_RECOGNITION_HELPER_TEXT: "Deja de hablar para enviar el mensaje"
  }
};

export const SWITCH_TEXT = {
  SWITCH_LANGUAGE_ENGLISH: "English",
  SWITCH_TOOLTIP_ENGLISH: "Language",
  SWITCH_LANGUAGE_SPANISH: "Español",
  SWITCH_TOOLTIP_SPANISH: "Idioma"
};

export const LANDING_PAGE_TEXT = {
  EN: {
    CHOOSE_LANGUAGE: "Choose language:",
    ENGLISH: "English",
    SPANISH: "Español",
    SAVE_CONTINUE: "Save and Continue",
    APP_ASSISTANT_NAME: "Kelvyn Park Chat Assistant",
    WELCOME_MESSAGE: "This chat is designed to help you access information about Kelvyn Park. You can ask questions about getting more involved, school hours, event and sports schedules, and more!"
  },
  ES: {
    CHOOSE_LANGUAGE: "Elige el idioma:",
    ENGLISH: "English",
    SPANISH: "Español",
    SAVE_CONTINUE: "Guardar y continuar",
    APP_ASSISTANT_NAME: "Asistente de Chat de Kelvyn Park",
    WELCOME_MESSAGE: "Este chat está diseñado para ayudarte a acceder a información sobre Kelvyn Park. ¡Puedes hacer preguntas sobre cómo involucrarte más, horarios escolares, eventos y horarios deportivos, y más!"
  }
};

// --------------------------------------------------------------------------------------------------------//

// API endpoints
export const CHAT_API = import.meta.env.VITE_CHAT_API;

export const WEBSOCKET_API = (() => {
  const value = import.meta.env.VITE_WEBSOCKET_API;
  if (!value) {
    console.error("🚨 VITE_WEBSOCKET_API is undefined. Check Amplify environment variables.");
  }
  return value;
})();

// --------------------------------------------------------------------------------------------------------//

// Features
export const ALLOW_FILE_UPLOAD = false;
export const ALLOW_VOICE_RECOGNITION = false;
export const ALLOW_MULTLINGUAL = true;
export const ALLOW_LANDING_PAGE = true;
export const ALLOW_MARKDOWN_BOT = false;

// VERY IMPORTANT
// REMOVE THE POST PROCESSING IN SPEECH RECOGNITION TO DETECT CALVIN AS KELYVIN IN SPEECH RECOGNITION COMPONENT
// ALSO update the title in the index.html file in the public folder
// Change the public favicon.ico to the new favicon.ico that you would like to use

