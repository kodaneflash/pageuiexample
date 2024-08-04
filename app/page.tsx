import Link from 'next/link';

import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingMarquee } from '@/components/landing/LandingMarquee';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

import { Button } from '@/components/shared/ui/button';

export default function Component() {
  const avatarItems = [
    {
      name: 'John Doe',
      imageSrc: '/path/to/john-doe-image.jpg',
    },
    {
      name: 'Jane Doe',
      imageSrc: '/path/to/jane-doe-image.jpg',
    },
    {
      name: 'Alice Doe',
      imageSrc: '/path/to/alice-doe-image.jpg',
    },
  ];

  const numberOfPortfolios = 1000; // Replace with actual number or fetch from API

  return (
    <>
      {/* Background gradient */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
          dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"
        ></div>
      </div>
  
      {/* Responsive Social Proof Band - Removed padding and made it full width */}
      <div className="w-full bg-gray-100 dark:bg-gray-800">
        <LandingSocialProofBand className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 py-2">
          <LandingSocialProofBandItem graphic="trophy" className="text-xs sm:text-sm">
            #1 in Product Hunt
          </LandingSocialProofBandItem>
          <LandingSocialProofBandItem graphic="rating" className="text-xs sm:text-sm">
            4.9/5 from 1000+ reviews
          </LandingSocialProofBandItem>
          <LandingSocialProofBandItem graphic="magic" className="text-xs sm:text-sm">
            Used by 10,000+ founders
          </LandingSocialProofBandItem>
        </LandingSocialProofBand>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-8">
          {/* Product Hunt Award */}
          <LandingProductHuntAward 
            place={3} 
            size="default" 
            grayscale={false}
            className="scale-125 mb-4"
          />

          {/* Become a member section */}
          <div className="relative group mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-600 rounded-full blur-sm group-hover:blur transition-all duration-300"></div>
            <Link
              href="/templates"
              className="relative px-4 py-2 bg-white dark:bg-black border border-emerald-500 rounded-full inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-200"
            >
              <span className="text-sm font-medium">
                Become a member of the SoloFoundersHub community!
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <h1 className="text-pretty text-neutral-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:-tracking-4 lg:leading-[4rem] lg:font-extrabold font-bold max-w-3xl text-center mt-4">
            Discover{' '}
            <span className="relative inline-block">
              secrets
              <svg
                className="absolute -bottom-1 w-full h-3 left-0"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.5C31 3.5 61 3.5 91 3.5C121 3.5 151 3.5 181 7.5"
                  stroke="url(#paint0_linear)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="1"
                    y1="5"
                    x2="181"
                    y2="5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#34d399" />
                    <stop offset="1" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            to 7-figure online businesses
          </h1>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-neutral-700 dark:text-neutral-300 mx-auto block text-balance max-w-sm text-sm sm:text-base md:text-lg xl:text-xl md:max-w-3xl">
            Dive into our database of{' '}
            <span className="text-foreground font-semibold">
              {numberOfPortfolios}+
            </span>{' '}
            case studies & join our community of thousands of successful founders.
          </p>
        </div>

        {/* LandingSocialProof component */}
        <div className="mt-8 flex justify-center">
          <LandingSocialProof
            avatarItems={avatarItems}
            numberOfUsers={numberOfPortfolios}
            suffixText="successful founders"
            showRating
            size="medium"
          />
        </div>

        <LandingMarquee withBackground>
          {/* Content for LandingMarquee can be added here if needed */}
        </LandingMarquee>
      </div>
    </>
  );
}