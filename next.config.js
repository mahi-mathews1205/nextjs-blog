const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "mahiMathews03",
        mongodb_password: "mongoDB321",
        mongodb_database: "contact",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "mahiMathews03",
      mongodb_password: "mongoDB321",
      mongodb_database: "contact",
    },
  };
};
