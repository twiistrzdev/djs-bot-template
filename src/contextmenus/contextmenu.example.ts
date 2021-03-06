import type { ContextMenuCommandInteraction } from 'discord.js';
import { injectable } from 'tsyringe';
import { exampleContextMenu } from '../builders/contextmenus/contextmenu.example.js';
import type { ContextMenuInterface } from '../client/interfaces/contextmenu.js';
import config from '../utils/config.js';
import logger from '../utils/logger.js';

@injectable()
export default class ExampleContextMenuContextMenu implements ContextMenuInterface {
	public readonly data = exampleContextMenu();
	public readonly global = false;

	/**
	 * Example context menu executer.
	 *
	 * @param {ContextMenuCommandInteraction} interaction
	 * @returns
	 */
	public async execute(interaction: ContextMenuCommandInteraction<`cached`>) {
		try {
			return await interaction.reply({ content: `${config.app.name} Context Menu`, ephemeral: true });
		} catch (e) {
			const error = e as Error;
			return logger.error(error, error.message);
		}
	}
}
