export const siteConfig = {
  name: "I'm Sourav, and here you can read more about me.",
  description:
    "Welcome to my portfolio website! I'm Sourav, a passionate front-end developer specializing in React and Next.js. 🚀",
  url:
    process.env.NODE_ENV === "production"
      ? "https://souravrs.com"
      : "http://localhost:3000",
  ogImage: "https://souravrs.com/images/og-image.jpg",
};
