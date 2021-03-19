import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@HopHub/navbar",
//   app: () => System.import("@HopHub/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
