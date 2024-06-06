export const Scripts = () => {
	const googleAnalytics = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());`;

	// collate blog config
	const googleAnalyticsConfig = `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-NKRH7R2W0H');
	`;
	return (
		<>
			<script async src={`https://ping.hashnode.com/gtag/js?id=G-72XG3F8LNJ`} />
			<script dangerouslySetInnerHTML={{ __html: googleAnalytics }} />

			{/* collate blog config */}
			<script async src={`https://www.googletagmanager.com/gtag/js?id=G-NKRH7R2W0H`}></script>
			<script dangerouslySetInnerHTML={{ __html: googleAnalyticsConfig }} />
		</>
	);
};
