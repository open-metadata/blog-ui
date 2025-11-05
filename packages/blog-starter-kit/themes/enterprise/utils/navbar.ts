export const hrefLinks = (link: string, site?: string) => {
    let finalLink = '';

    if (site === "main") {
        finalLink = `https://www.getcollate.io${link}`
    } else if (link.startsWith('https://') || site === "blog" || !site) {
        finalLink = link;
    }

    const target = finalLink.includes('https') ? '_blank' : '_self'

    return { finalLink, target };
}