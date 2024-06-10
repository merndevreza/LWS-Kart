import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  bn: () => import("./bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => { 

  // Check if locale is valid, otherwise default to 'en'
  if (!dictionaries[locale]) {
    locale = 'en';
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    throw error;
  }
};
