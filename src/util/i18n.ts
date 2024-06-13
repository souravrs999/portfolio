const defaultLocale = "en-US";
const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  "en-US": () =>
    import("../dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const dictionary = dictionaries[locale as keyof typeof dictionaries];
  if (dictionary) {
    return dictionary();
  } else {
    return dictionaries[defaultLocale as keyof typeof dictionaries];
  }
};
