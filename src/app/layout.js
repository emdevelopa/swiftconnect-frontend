import { Poppins } from 'next/font/google'
import './globals.css'
import { UserProvider } from '../contexts/UserContext'
import { TransactionProvider } from '../contexts/TransactionContext'
// import Footer from "@/app/account/components/Footer";
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: true,
  adjustFontFallback: true
})

export const metadata = {
  title: 'SwiftConnect',
  description: 'Swiftconnect utility payment platform'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={` ${poppins.className} antialiased` }>
        {/* Logo */}

        <UserProvider>
          <TransactionProvider>
            <div className='w-full'>{children}</div>
          </TransactionProvider>
        </UserProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton
          role="alert"
          aria-live="assertive"
          toastClassName="rounded-lg shadow-lg font-semibold text-base bg-white text-gray-900 border border-gray-200"
          bodyClassName="p-4"
        />
      </body>
    </html>
  )
}
