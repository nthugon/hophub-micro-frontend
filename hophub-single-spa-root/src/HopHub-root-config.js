import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@HopHub/hophub-header-react",
  app: () => System.import("@HopHub/hophub-header-react"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@HopHub/hophub-footer-react",
  app: () => System.import("@HopHub/hophub-footer-react"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@HopHub/hophub-homepage-angular",
  app: () => System.import("@HopHub/hophub-homepage-angular"),
  activeWhen: [(location) => location.pathname === "/"],
});

registerApplication({
  name: "@HopHub/hophub-aboutpage-react",
  app: () => System.import("@HopHub/hophub-aboutpage-react"),
  activeWhen: ["/about"],
});

registerApplication({
  name: "@HopHub/hophub-beerspage-angular",
  app: () => System.import("@HopHub/hophub-beerspage-angular"),
  activeWhen: [
    (location) =>
      location.pathname === "/beers" || location.pathname === "/beers/",
  ],
});

registerApplication({
  name: "@HopHub/hophub-reviewspage-react",
  app: () => System.import("@HopHub/hophub-reviewspage-react"),
  activeWhen: [
    (location) =>
      location.pathname.includes("/beers/") &&
      location.pathname.split("/").filter((x) => x).length > 1,
  ],
});

start({
  urlRerouteOnly: true,
});
