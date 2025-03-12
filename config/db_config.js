function getDbConfig(env) {
  if (env === "production") {
    const mysql = require("mysql2");
    const dbUrl = process.env.JAWSDB_URL; // Get DB URL from Heroku
    const config = new URL(dbUrl);

    return {
      username: config.username,
      password: config.password,
      database: config.pathname.substring(1), // Remove leading '/'
      host: config.hostname,
      dialect: "mysql"
    };
  }

  // Default config for development and test
  const config = {
    development: {
      username: "root",
      password: "Catherine62#",
      database: "pantryDB",
      host: "127.0.0.1",
      dialect: "mysql",
    },
    test: {
      username: "root",
      password: "Catherine62#",
      database: "pantryDB",
      host: "127.0.0.1",
      dialect: "mysql",
    },
  };

  return config[env];
}

module.exports = getDbConfig;


module.exports = getDbConfig;
