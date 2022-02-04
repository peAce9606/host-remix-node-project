import {
  ExampleTinyFrontendType,
  loadExampleTinyFrontendClient,
} from "@tiny-frontent/example-tiny-frontend-contract";

export let ExampleTinyFrontendClient: ExampleTinyFrontendType;

export const ensureExampleTinyFrontendLoadedClient = async () => {
  ExampleTinyFrontendClient = await loadExampleTinyFrontendClient(
    "https://tiny-frontent-api-cloudlare-example.gnomesgames.workers.dev/api"
  );
};
