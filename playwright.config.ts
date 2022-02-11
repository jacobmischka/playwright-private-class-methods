import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	globalSetup: require.resolve('./setup.ts')
};

export default config;
