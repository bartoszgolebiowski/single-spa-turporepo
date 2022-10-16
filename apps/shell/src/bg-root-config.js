import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@bg/home",
  app: () => System.import("@bg/home"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
