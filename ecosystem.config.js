module.exports = {
    apps: [
      {
        name: "sbook",
        script: "./main.js",
        env: {
          PORT: 4004,
          NODE_ENV: "production",
        },
      },
    ],
  };
  