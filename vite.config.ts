import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: [{ find: '@/', replacement: `${__dirname}/src/` }]
	},
	plugins: [react(), vanillaExtractPlugin()]
});
