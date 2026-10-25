import { iImage } from '../McImage/McImage';
export interface iBlog {
	slug: string;
	date: Date;
	tags: string[];
	images: iImage[];
	content?: string | JSX.Element;
	type: 'Evénement' | 'Article';
	h1?: string;
}

export interface iBlogCradsPanel {
	filter?: string;
	sort: string;
	desc: boolean;
}
