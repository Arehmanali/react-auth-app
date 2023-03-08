export const config = {
  SERVER_URL:
    process.env.REACT_APP_NODE_ENV === "development"
      ? "http://localhost:3020"
      : process.env.REACT_APP_SERVER_URL,
};

console.log("SERVER_URL:", config.SERVER_URL);

export default config;
