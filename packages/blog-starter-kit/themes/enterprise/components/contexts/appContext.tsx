import React, { createContext, useContext, useEffect, useState } from 'react';
import { PostFullFragment, PublicationFragment } from '../../generated/graphql';

type AppContext = { publication: PublicationFragment; post: PostFullFragment | null; isEmbedded: boolean };

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({
	children,
	publication,
	post,
}: {
	children: React.ReactNode;
	publication: PublicationFragment;
	post?: PostFullFragment | null;
}) => {
	const [isEmbedded, setIsEmbedded] = useState(false)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setIsEmbedded(window.self !== window.top)
		}
	}, [])
	return (
		<AppContext.Provider
			value={{
				publication,
				post: post ?? null,
				isEmbedded,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within a <AppProvider />');
	}

	return context;
};
export { AppProvider, useAppContext };
