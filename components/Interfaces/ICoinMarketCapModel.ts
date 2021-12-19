export interface Status {
	timestamp: string;
	error_code: number;
	error_message: string;
	elapsed: number;
	credit_count: number;
	notice: string;
	total_count: number;
}

export interface CmcCryptoCurrency {
	id: number;
	name: string;
	symbol: string;
	slug: string;
	num_market_pairs: number;
	date_added: string;
	tags: string[];
	max_supply: number | null;
	circulating_supply: number;
	total_supply: number;
	platform: Platform | null;
	cmc_rank: number;
	last_updated: string;
	quote: Quote;
	isFavorite?: boolean;
}

export interface Platform {
	id: number;
	name: string;
	symbol: string;
	slug: string;
	token_address: string;
}

export interface Quote {
	USD?: Valuta;
	EUR?: Valuta;
}

export interface Valuta {
	price: number;
	volume_24h: number;
	volume_change_24h: number;
	percent_change_1h: number;
	percent_change_24h: number;
	percent_change_7d: number;
	percent_change_30d: number;
	percent_change_60d: number;
	percent_change_90d: number;
	market_cap: number;
	market_cap_dominance: number;
	fully_diluted_market_cap: number;
	last_updated: string;
}

export default interface CMCResponse {
	status: Status;
	data: CmcCryptoCurrency[];
}
