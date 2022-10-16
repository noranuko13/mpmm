import liveServer from "live-server";

const getEnvParams = () => {
  let envs;
  switch (process.env.npm_lifecycle_event) {
    case "serve:dev":
      envs = {
        root: "./src",
      };
      break;
    case "serve:prod":
      envs = {
        root: "./dist",
      };
      break;
    default:
      throw ReferenceError;
  }
  return envs;
};

liveServer.start({
  open: "/mpmm",
  ...getEnvParams(),
});
