export const config = {
  SERVER_URL:
    process.env.REACT_APP_NODE_ENV === "development"
      ? "http://localhost:8900"
      : "http://34.241.166.1:8900/api/v1",
};

console.log("SERVER_URL:", config.SERVER_URL);

export default config;
