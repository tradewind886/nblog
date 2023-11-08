import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "npm run build && npm run preview",
		port: 4172,
		host: 0.0.0.0,
	},
	testDir: "tests",
};

export default config;
