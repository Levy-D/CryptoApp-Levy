
import React, {createContext} from 'react';

export const IsEnabledHighlightChainlinkContext = createContext<{
	isEnabledHighlightChainlink: boolean;
	setIsEnabledHighlightChainlink: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	isEnabledHighlightChainlink: false,
	setIsEnabledHighlightChainlink: (value: React.SetStateAction<boolean>) =>
		value,
});

export const IsEnabledUseEURContext = createContext<{
	isEnabledUseEUR: boolean;
	setIsEnabledUseEUR: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	isEnabledUseEUR: false,
	setIsEnabledUseEUR: (value: React.SetStateAction<boolean>) => value,
});
