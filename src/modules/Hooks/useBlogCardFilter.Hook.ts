import { useState, useMemo } from 'react';
import { iBlog } from '../../components/fragments/Blog/IBlog';

export interface iBlogFilters {
	type?: 'Evénement' | 'Article';
	tags?: string[];
}

export const useBlogCardFilter = (articles: iBlog[]) => {
	const [filters, setFilters] = useState<iBlogFilters>({
		tags: [],
	});

	const filtered = useMemo(() => {
		return articles
			.filter((a) => {
				if (!!filters.type && a.type !== filters.type) return false;

				if (
					filters.tags &&
					filters.tags.length > 0 &&
					!filters.tags.every((t) => a.tags.includes(t))
				)
					return false;
				return true;
			})
			.sort((a, b) => b.date.getTime() - a.date.getTime());
	}, [articles, filters]);

	return { filters, setFilters, filtered };
};
