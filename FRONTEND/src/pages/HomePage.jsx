
// import React from 'react'
// import UrlForm from '../components/UrlForm'

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//     <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//       <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
//       <UrlForm/>
//     </div>
//   </div>
//   )
// }

// export default HomePage











// import React, { useState } from 'react';
// import { useRouter } from '@tanstack/react-router';
// import UrlForm from '../components/UrlForm';

// const HomePage = () => {
//   const router = useRouter();
//   const [menuOpen, setMenuOpen] = useState(false);

  

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

       
//         {/* Info text */}
//         <p className="text-center text-sm text-gray-600 mb-6">
//           <span className="font-medium text-blue-600">
//             If you login/signup, you can customize your URL
//           </span>
//         </p>

//         {/* URL form */}
//         <UrlForm />
//       </div>
//     </div>
//   );
// };

// export default HomePage;










import React from 'react';
import UrlForm from '../components/UrlForm';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 small-screen-padding">
      <div className="bg-white p-1 rounded-xl shadow-lg w-full max-w-md relative small-screen-padding small-screen-width-full">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900 small-screen-text-smaller">
          URL Shortener
        </h1>

        <p className="text-center text-sm text-gray-600 mb-8 small-screen-text-xs">
          <span className="font-semibold text-blue-600">
            If you login/signup, you can customize your URL
          </span>
        </p>

        <UrlForm />
      </div>
    </div>
  );
};

export default HomePage;
