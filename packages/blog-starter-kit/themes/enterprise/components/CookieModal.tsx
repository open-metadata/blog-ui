import { useEffect } from 'react'
import Link from 'next/link'

const CookieModal = ({ handleButtonClick }: { handleButtonClick: (choice: string) => void }) => {
    const handleModalClose = (choice: string) => {
        const modalElement = document.querySelector('.cookie-modal')
        if (modalElement) {
            modalElement.classList.remove('visible')
            setTimeout(() => handleButtonClick(choice), 1200)
        }
    }

    useEffect(() => {
        const modalElement = document.querySelector('.cookie-modal')
        const timer = setTimeout(() => {
            if (modalElement) {
                modalElement.classList.add('visible')
            }
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="fixed bottom-0 bg-[#F8FBFC] z-[30] p-6 shadow-shadow cookie-card sm:m-5 sm:max-w-xl lg:max-w-4xl cookie-modal">
            <p className="text-[#475569] font-light">
                We use cookies to improve site navigation, analyze site usage,
                and enhance your user experience. Click &quot;Accept&quot; to enable
                cookies or &quot;Reject&quot; to reject cookies. To learn more, read our{' '}
                <Link href="/privacypolicy">
                    <span className="underline text-primary cursor-pointer">
                        Privacy Policy
                    </span>
                </Link>
                .
            </p>
            <div className="mt-8 flex gap-3 justify-end">
                <button
                    className="text-white bg-[#CD3C4D] rounded-3xl py-2 px-8 text-sm"
                    onClick={() => handleModalClose('Accept')}
                >
                    Accept
                </button>
                <button
                    className="text-[#CD3C4D] bg-white border border-[#CD3C4D] rounded-3xl py-2 px-8 text-sm"
                    onClick={() => handleModalClose('Decline')}
                >
                    Reject
                </button>
            </div>
        </div>
    )
}

export default CookieModal
