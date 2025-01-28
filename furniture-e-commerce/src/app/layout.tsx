import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import LoadingIndicator from '@/components/common/LoadingIndicator';
import { SearchProvider } from '@/context/SearchContext'; // Import the SearchProvider

export const metadata: Metadata = {
  title: 'Ecommerce furniture',
  description: 'Get any furniture items on the fly',
};

const poppin = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <SearchProvider>
          <main className="bg-white">
            <LoadingIndicator />
            <NavBar />
            {children}
            <Toaster />
            <div className="mt-[56px]">
              <Footer />
            </div>
          </main>
        </SearchProvider>
      </body>
    </html>
  );
}
