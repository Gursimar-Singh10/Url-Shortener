// import React from 'react'
// import UrlForm from '../components/UrlForm'
// import UserUrl from '../components/UserUrl'

// const DashboardPage = () => {
//   return (
//     <div className="min-h-screen   bg-gray-100 flex flex-col items-center justify-center p-4">
//     <div className="bg-white -mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl">
//       <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
//       <UrlForm/>
//       <UserUrl/>
//     </div>
//   </div>
//   )
// }


// export default DashboardPage









































import React from 'react';
import UrlForm from '../components/UrlForm';
import UserUrl from '../components/UserUrl';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 small-screen-padding">
      <div className="bg-white p-1 rounded-xl shadow-lg w-full max-w-4xl small-screen-padding small-screen-width-full">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900 small-screen-text-smaller">
          URL Shortener
        </h1>
        <UrlForm />
        <UserUrl />
      </div>
    </div>
  );
};

export default DashboardPage;













