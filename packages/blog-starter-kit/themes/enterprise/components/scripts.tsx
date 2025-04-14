export const Scripts = () => {
	const googleAnalyticsConfig = `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-NKRH7R2W0H');
	`;
	return (
		<>
			{/* collate blog config */}
			<script async src={`https://www.googletagmanager.com/gtag/js?id=G-NKRH7R2W0H`}></script>
			<script dangerouslySetInnerHTML={{ __html: googleAnalyticsConfig }} />
		</>
	);
};
