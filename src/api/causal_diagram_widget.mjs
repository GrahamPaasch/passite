import { mount } from 'svelte';
import CausalDiagramWidget from '../lib/CausalDiagramWidget.svelte';

export default function(options) {
	return mount(CausalDiagramWidget, options);
};
