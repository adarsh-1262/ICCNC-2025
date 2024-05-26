import React from 'react';

export default function SpeakerCard() {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-blue-800 font-bold text-center mt-8">Committee Members</h1>
        {/* ///////////////// General Chair Members: ////////////// */}
        <h2 className='text-xl text-black font-semibold underline text-center ml-7 mt-8'>General Chair:</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690826333/profilePhotoUploads/ii1xbdey4qvk13byo2hk.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. D K Tripathi</h1>
            <p className="mt-3 text-sm text-gray-600">
              Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1715861186/profilePhotoUploads/sacygfyxuj8pb8bp7r2l.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. Vijay Pratap Singh</h1>
            <p className="mt-3 text-sm text-gray-600">
            Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
      </div>
{/* ////////////////      Program Chair     ///////////////////// */}
      <div>
        <h2 className='text-xl text-black font-semibold underline text-center ml-7 mt-8'>Program Chair:</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690826665/profilePhotoUploads/yenu2gitzwhv5jkbjbn3.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. Himanshu Katiyar</h1>
            <p className="mt-3 text-sm text-gray-600">
              Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQGHHhnGCMYTzw/profile-displayphoto-shrink_400_400/0/1676528532125?e=1722470400&v=beta&t=uge2lypcEMCtqLyoXZIKlmjkOqmGc_rXj5P4QhLUZ6I"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. Robin Singh</h1>
            <p className="mt-3 text-sm text-gray-600">
            NIT Hamirpur
            </p>
          </div>
        </div>
      </div>
{/* ////////////////////////////////////            Publicity Chair            ///////////////////////////////////// */}
      <div>
        <h2 className='text-xl text-black font-semibold underline text-center ml-7 mt-8'>Publicity Chair:</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690826802/profilePhotoUploads/fb1dlp3s0z6a2rm3ad82.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. Abhinav</h1>
            <p className="mt-3 text-sm text-gray-600">
              Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690827491/profilePhotoUploads/lbxddy1loqlfi2xowbn9.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Mr. Sikandar</h1>
            <p className="mt-3 text-sm text-gray-600">
            Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://media.licdn.com/dms/image/C5103AQG_7WK3tj9goA/profile-displayphoto-shrink_800_800/0/1576826302368?e=1722470400&v=beta&t=fCs1P0u-NerOnah5UIbkumHVT2-7y4kBpfpXu3NWlH4"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. Yedunath Pathak</h1>
            <p className="mt-3 text-sm text-gray-600">
            MANIT Bhopal
            </p>
          </div>
        </div>
      </div>
{/* /////////////////////////////////////////                Publication Chair               ////////////////////////////////////////  */}
      <div>
        <h2 className='text-xl text-black font-semibold underline text-center ml-7 mt-8'>Publication Chair:</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690825566/profilePhotoUploads/pn8owsowbbsekrbvs764.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. T. Chiranjeevi</h1>
            <p className="mt-3 text-sm text-gray-600">
              Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690827397/profilePhotoUploads/jdkrx3uji70mxws5kwxq.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Mr. Prashant Pandey</h1>
            <p className="mt-3 text-sm text-gray-600">
            Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690827289/profilePhotoUploads/deje7qkdx1krnxylnpz5.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Mr. Deepak</h1>
            <p className="mt-3 text-sm text-gray-600">
            Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="#"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Mr. Anubhav Singh</h1>
            <p className="mt-3 text-sm text-gray-600">
            MANIT Bhopal
            </p>
          </div>
        </div>
      </div>
      {/* ////////////////      Finance Chair     ///////////////////// */}
      <div>
        <h2 className='text-xl text-black font-semibold underline text-center ml-7 mt-8'>Finance Chair:</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690827109/profilePhotoUploads/agp7fugfcttvepvwaf7b.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. P.K. Verma</h1>
            <p className="mt-3 text-sm text-gray-600">
              Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="#"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Prof.M.P.S. Chawta</h1>
            <p className="mt-3 text-sm text-gray-600">
            SGSITS Indore
            </p>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////            Track Chair            ///////////////////////////////////// */}
      <div>
        <h2 className='text-xl text-black font-semibold underline text-center ml-7 mt-8'>Track Chair:</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://media.licdn.com/dms/image/C5603AQE0eE1tia_nmA/profile-displayphoto-shrink_400_400/0/1517596536235?e=1722470400&v=beta&t=EosaV_7kLXl_Shkt695wEi9zI_VS_stOYEThmxqBVAI"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. Jitendra Agrawal</h1>
            <p className="mt-3 text-sm text-gray-600">
            RGPV Bhopal
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://media.licdn.com/dms/image/C5103AQHdF6-80PJWkg/profile-displayphoto-shrink_800_800/0/1516903693403?e=1722470400&v=beta&t=JgltKwZJaDVfL7QLehJvkxmSxbnctNbpD4yovkHHsD4"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. R.K. Patel</h1>
            <p className="mt-3 text-sm text-gray-600">
            Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690825978/profilePhotoUploads/vdisuzwlpj3nm8almroz.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Mr. Ram Ishwar Vais</h1>
            <p className="mt-3 text-sm text-gray-600">
            Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
      </div>
      {/* ////////////////      Website Chair     ///////////////////// */}
      <div>
        <h2 className='text-xl text-black font-semibold underline text-center ml-7 mt-8'>Website Chair:</h2>
      </div>
      <div className="flex justify-center">
        <div className="w-[200px] rounded-md border shadow-lg overflow-hidden transform transition-transform hover:scale-105 m-4">
          <div className="h-[150px] w-full bg-gray-200">
            <img
              src="https://res.cloudinary.com/recsfaculty/image/upload/v1690823648/profilePhotoUploads/n1tr2pqxbmoni1elevuk.jpg"
              alt="member"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg text-blue-800 font-semibold">Dr. Anurag Sewak</h1>
            <p className="mt-3 text-sm text-gray-600">
              Rajkiya Engineering College Sonbhadra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
