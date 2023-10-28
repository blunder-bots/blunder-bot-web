// import Link from 'next/link'
// import MobileMenu from './mobile-menu'
// import Image from 'next/image'
// import Logo from './Logo/Logo.png'
// import TestimonialImage01 from '@/public/images/testimonial-01.jpeg'

// import { url } from 'inspector'

// export default function Header() {
//   return (
//     <header className="absolute w-full z-30">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Site branding */}
//           <div className="shrink-0 mr-4">
//             {/* Logo */}
//             {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
//             {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1080" height="1080" viewBox="0 0 1080 1080" >

// <g transform="matrix(1 0 0 1 540 540)" id="c9231d30-39c3-4bd2-8cb7-00288bd773e7"  >
// <rect stroke='none' strokeWidth={1} strokeDasharray={'none'} strokeLinecap='butt' strokeDashoffset={0} strokeLinejoin='miter' strokeMiterlimit={4} fill='rgb(255,255,255)' fillRule='nonzero' opacity={1} visibility={'hidden'} vectorEffect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" />
// </g>
// <g transform="matrix(1 0 0 1 540 540)" id="20799cd0-7902-4af7-9d0b-097364f2ae13"  >
// </g>
// <g transform="matrix(1 0 0 1 540 540)"  >
// <g vectorEffect="non-scaling-stroke"   >
// 		<g transform="matrix(0.13 0 0 -0.13 125.01 -0.38)"  >
// <path stroke='none' strokeWidth={1} strokeDasharray={'none'} strokeLinecap='butt' strokeDashoffset={0} strokeLinejoin='miter' strokeMiterlimit={4} fill='rgb(255,255,255)' fillRule='nonzero' opacity={1} visibility={'hidden'}vectorEffect="non-scaling-stroke"  transform=" translate(-4528, -4022.32)" d="M 2461 8025 C 2425 8017 2363 7995 2323 7976 C 2108 7874 1965 7687 1897 7422 L 1875 7335 L 1875 6140 C 1875 4842 1873 4886 1931 4726 C 2012 4502 2185 4325 2392 4254 C 2467 4228 2487 4225 2605 4226 C 2719 4226 2744 4229 2808 4252 C 2918 4292 2986 4336 3080 4430 C 3239 4590 3314 4769 3327 5028 L 3333 5150 L 3571 5150 L 3810 5150 L 3812 2833 L 3815 515 L 3842 442 C 3878 343 3919 282 4005 203 C 4091 122 4182 71 4305 34 C 4385 10 4411 7 4540 7 C 4670 7 4694 9 4775 34 C 4899 72 4988 121 5072 199 C 5156 277 5212 358 5243 449 L 5265 515 L 5268 2833 L 5270 5150 L 5500 5150 L 5730 5150 L 5730 3452 C 5730 1919 5732 1748 5746 1699 C 5777 1597 5819 1529 5904 1444 C 6037 1313 6200 1244 6402 1233 C 6528 1226 6631 1240 6742 1279 C 6851 1318 6924 1364 7011 1450 C 7094 1532 7148 1627 7169 1728 C 7185 1803 7185 6237 7169 6312 C 7135 6479 7001 6641 6829 6724 C 6702 6785 6637 6801 6488 6807 C 6379 6812 6347 6809 6265 6790 C 6013 6732 5815 6565 5751 6356 C 5731 6291 5730 6266 5730 5854 L 5730 5420 L 5500 5420 L 5271 5420 L 5268 6473 L 5265 7525 L 5243 7591 C 5173 7795 4990 7952 4745 8016 C 4647 8042 4433 8042 4335 8016 C 4090 7952 3907 7794 3837 7591 L 3815 7525 L 3812 6473 L 3809 5420 L 3570 5420 L 3330 5420 L 3330 6333 C 3330 6910 3326 7276 3320 7329 C 3280 7646 3081 7910 2812 8003 C 2707 8039 2562 8048 2461 8025 z M 2695 6951 C 2750 6926 2798 6876 2829 6810 L 2855 6755 L 2855 6130 C 2855 5550 2854 5502 2837 5465 C 2785 5349 2707 5290 2605 5290 C 2500 5291 2420 5345 2373 5446 L 2349 5498 L 2352 6142 L 2355 6785 L 2382 6831 C 2413 6883 2469 6936 2514 6956 C 2559 6975 2648 6973 2695 6951 z" stroke-linecap="round" />
// </g>
// 		<g transform="matrix(0.13 0 0 -0.13 -382.11 -12.43)"  >
// <path stroke='none' strokeWidth={1} strokeDasharray={'none'} strokeLinecap='butt' strokeDashoffset={0} strokeLinejoin='miter' strokeMiterlimit={4} fill='rgb(255,255,255)' fillRule='nonzero' opacity={1} visibility={'hidden'} vectorEffect="non-scaling-stroke"  transform=" translate(-724.62, -4112.69)" d="M 514 6880 C 314 6828 154 6695 65 6508 C -4 6363 0 6524 0 4110 C 0 1665 -6 1856 75 1692 C 154 1534 290 1415 465 1353 C 541 1326 553 1325 725 1325 C 897 1325 909 1326 985 1353 C 1160 1415 1296 1534 1375 1692 C 1456 1858 1451 1662 1448 4142 L 1445 6355 L 1422 6420 C 1333 6664 1166 6821 932 6881 C 829 6907 615 6907 514 6880 z" stroke-linecap="round" />
// </g>
// 		<g transform="matrix(0.13 0 0 -0.13 -125.4 281.24)"  >
// <path stroke='none' strokeWidth={1} strokeDasharray={'none'} strokeLinecap='butt' strokeDashoffset={0} strokeLinejoin='miter' strokeMiterlimit={4} fill='rgb(255,255,255)' fillRule='nonzero' opacity={1} visibility={'hidden'} vectorEffect="non-scaling-stroke"  transform=" translate(-2649.93, -1910.16)" d="M 2470 3797 C 2272 3738 2094 3576 2004 3373 C 1989 3341 1966 3272 1952 3220 L 1926 3125 L 1922 1995 C 1919 821 1922 710 1960 575 C 2041 287 2260 70 2522 16 C 2674 -15 2799 2 2949 76 C 3171 186 3333 430 3370 710 C 3378 769 3380 1150 3378 1965 L 3374 3135 L 3352 3220 C 3340 3267 3306 3352 3278 3410 C 3233 3502 3214 3527 3131 3611 C 3052 3690 3020 3714 2950 3748 C 2836 3804 2767 3820 2645 3819 C 2572 3819 2525 3813 2470 3797 z M 2760 2726 C 2814 2699 2873 2626 2892 2561 C 2902 2525 2905 2384 2905 1900 L 2905 1285 L 2881 1232 C 2853 1170 2775 1095 2722 1080 C 2629 1055 2531 1085 2467 1160 C 2398 1240 2400 1223 2400 1914 C 2401 2411 2404 2543 2414 2573 C 2457 2692 2567 2766 2680 2752 C 2699 2750 2735 2738 2760 2726 z" stroke-linecap="round" />
// </g>
// </g>
// </g>
// </svg> */}

//             {/* <Image className="rounded-full" src={Logo} width={30} height={30} alt="Testimonial 01" /> */}
//             <Link href="/" className="block" aria-label="Cruip">
//                   Blunder Bot Technologies
//             </Link>
// {/* </div> */}
//           </div>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex md:grow">
//             {/* Desktop sign in links */}
//             <ul className="flex grow justify-end flex-wrap items-center">
//               <li>
//                 <Link
//                   href="#talktoteam"
//                   className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
//                 >
//                   Meet Our Team
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#services" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
//                   Our Services
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           <MobileMenu />

//         </div>
//       </div>
//     </header>
//   )
// }

import Link from "next/link";
import MobileMenu from "./mobile-menu";
// import CountdownTo12AM from "./timer";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 font-mono">
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center" }}>
            <svg className="mr-2" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16.01 17.92" >
  <g id="PRINT_1" data-name="PRINT 1">
    <g>
      <path fill="#ffffff"  d="m15.53,3.13c-.29-.24-.69-.39-1.14-.39-.89,0-1.61.6-1.61,1.34v1.77h-1.04V1.34c0-.37-.18-.7-.47-.95-.29-.24-.69-.39-1.14-.39-.89,0-1.61.6-1.61,1.34v4.51h-1.1V1.83c0-.5-.18-.96-.47-1.29-.29-.33-.69-.54-1.14-.54-.89,0-1.61.82-1.61,1.83v4.86c0,1.01.72,1.83,1.61,1.83s1.61-.82,1.61-1.83v-.25h1.1v10.14c0,.74.72,1.34,1.61,1.34s1.61-.6,1.61-1.34V6.44h1.04v7.41c0,.74.72,1.34,1.61,1.34s1.61-.6,1.61-1.34V4.07c0-.37-.18-.7-.47-.95Zm-9.16,2.36c0,.36-.26.65-.57.65s-.57-.29-.57-.65v-2.47c0-.36.26-.65.57-.65.16,0,.3.07.41.19.1.12.17.28.17.46v2.47Z"/>
      <path fill="#ffffff" d="m7.05,9.94c-.29-.33-.7-.54-1.14-.54-.89,0-1.61.82-1.61,1.83v4.86c0,1.01.72,1.83,1.61,1.83s1.61-.82,1.61-1.83v-4.86c0-.51-.18-.96-.47-1.29Zm-.57,4.96c0,.36-.26.65-.57.65s-.57-.29-.57-.65v-2.47c0-.36.26-.65.57-.65.16,0,.3.07.41.19.1.12.17.28.17.46v2.47Z"/>
      <rect fill="#ffffff" x="0" y="2.54" width="3.23" height="12.45" rx="1.61" ry="1.61"/>
    </g>
  </g></svg>

              {/* <Image className="rounded-full" src={Logo} width={30} height={30} alt="Testimonial 01" /> */}
              <Link href="/" className="block" aria-label="Cruip">
                Blunder Bot Technologies
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow font-mono">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#talktoteam"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="#services" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Our Services
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
