import Fig from '@src/components/Icons/fig';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiTerminal } from 'react-icons/hi';

import { SiGithub } from 'react-icons/si';

// export const MainSecond = () => {
//     return (
//         <>
//             <div className="max-w-7xl min-h-[calc(100vh-4.75rem)] mx-auto py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:items-center">
//                 {/* Title */}
//                 <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-center inline-flex items-center select-none">
//                     <HiTerminal className="mr-2" size="1.2em" />
//                     <span>shell</span>
//                     <span>.</span>
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
//                         how?
//                     </span>
//                     <a
//                         className="relative top-3.5 transform rotate-12 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
//                         href="#"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <SiGithub size={18} />
//                     </a>
//                 </h1>
//                 <p className="mt-2 sm:mt-4 inline-flex items-center space-x-2 text-xl text-gray-500 dark:text-gray-400 sm:text-center">
//                     <span>Explain shell commands using</span>
//                     <a
//                         href="https://fig.io"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center space-x-1"
//                     >
//                         <Fig className="dark:invert" aria-hidden />
//                         <span className="font-medium text-gray-800 hover:text-black dark:text-gray-200">Fig</span>
//                         <FiArrowUpRight size="0.75em" aria-hidden />
//                     </a>
//                 </p>
//             </div>
//         </>
//     );
// };
export const MainSecond = () => {
    return (
        <>
            <div className="flex">
                <div className="flex-none w-14 h-14 bg-orange-500">01</div>
                <div className="shrink w-64 h-14 bg-gray-500">02</div>
                <div className="flex-none w-14 h-14 bg-red-500">03</div>
            </div>
        </>
    );
};
