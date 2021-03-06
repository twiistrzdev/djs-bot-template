import type { ConfigInterface } from '../client/interfaces/config.js';

const config: ConfigInterface = {
	token: process.env.CLIENT_TOKEN!,
	env: process.env.NODE_ENV!,

	app: {
		name: process.env.APP_NAME!,
		clientId: process.env.CLIENT_ID!,
		guildId: process.env.GUILD_ID!,
	},

	color: {
		primary: 131060,
		secondary: 3092790,
		danger: 16462404,
		success: 3908957,
	},

	image: {
		options: {
			forceStatic: false,
			size: 256,
		},
	},

	link: {
		repository: ``,
		invite: ``,
		support: ``,
	},
};

export default config;
