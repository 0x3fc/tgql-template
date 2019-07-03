module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./tests/lib/setup.ts"],
  setupFilesAfterEnv: ["./tests/lib/resets.ts"],
};
