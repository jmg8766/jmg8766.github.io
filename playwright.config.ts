import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	// reporter: process.env.CI ? 'junit' : 'list',
	projects: Object.keys(devices).map((name) => ({ name, use: devices[name] }))
};

export default config;
