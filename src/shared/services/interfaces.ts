export interface IMetricsContxtData {
	loadedMetrics: ILoadedMetrics | undefined;
	pagination: IisPagination;
	period: string;
	limitDate: string;
	isPeriod(isPer: string): void | null;
	isLoadedMetrics(isLoad: IsocialData): void | null;
	isPagination(prevDate: string, nextDate: string): void | null;
}

export interface IisPagination {
	prevDate: string;
	nextDate: string;
}

export interface IisPeriodCredentials {
	isPer: string;
}

export interface IisLoadedMetrics {
	y: Ixy;
	x: Ixy;
	socialData: IsocialData;
}

export interface Ixy {
	mDate: string;
	mFullYear: string;
	mMonthString: string;
	mOriginalDate: string;
	mShortYear: string;
}

export interface IsocialData {
	id: number;
	label: string | null;
	name: string;
	qtd: number;
}

export interface ILoadedMetrics {
	socialData: IsocialData;
}
