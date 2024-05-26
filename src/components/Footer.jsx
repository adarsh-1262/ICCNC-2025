import React from 'react'
import logo from '../assets/Collegelogo.png'

export default function Footer() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <span>
                  <img src={logo} alt="IEEE Conference" className="h-8 w-auto" />
                </span>
                <span className="ml-4 text-lg font-bold">ICCNC 2025</span>
              </div>
              <div>
    <p className="mb-4 text-base font-medium"></p>
    <p className="text-sm text-gray-600">
        &copy; Copyright 2024. All Rights Reserved by ICCNC-2025.
        <br></br>
        Made with ❤️ by <a href="https://github.com/adarsh-1262" target="_blank" rel="noopener noreferrer">Adarsh Singh</a>.
    </p>
</div>

            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/about">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/paper-policy">
                    Paper Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/speakers">
                    Speakers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/committee">
                    Conference Committee
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/themes">
                    Conference Themes
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/registration">
                    Registration
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-gray-900 hover:text-gray-700" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
