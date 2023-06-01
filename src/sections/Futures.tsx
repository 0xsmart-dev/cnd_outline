import React from "react";

const Futures = () => {
  return (
    <div className="py-10 md:mt-20 mt-0">
      <h1 className="text-center mb-4 text-3xl font-bold">
        Why is DiamondCDN an aspiring world leader?
      </h1>
      <p className="font-medium dark:text-gray-400 text-center mx-auto md:w-1/2 text-gray-600 w-3/4 mb-10 md:mb-24">
        We've tried the other options in the market, and we always found they
        offered subpar cybersecurity protections and lackluster optimization.
        That's why we built DiamondCDN—we've built apps on the other CDN
        services, and we built a service to pool the strengths and build on the
        weaknesses.
      </p>
      <div className="flex flex-wrap flex-row gap-4 justify-center text-center">
        <div className="rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 h-80 p-10 shadow-sm w-80">
          <div className="mx-auto rounded-lg text-white bg-gradient-to-r h-10 p-2 w-10 from-blue-500 to-blue-700">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 className="mt-2">Great DDoS protection</h3>
          <p className="mt-2 dark:text-gray-400">
            The biggest pitfall we found with the other options was the lack of{" "}
            <a className="italic">great</a> DDoS protection. We built our system
            so you don't have to be an expert in DDoS solutions to stop one.
          </p>
        </div>
        <div className="rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 h-80 p-10 shadow-sm w-80">
          <div className="mx-auto rounded-lg text-white bg-gradient-to-r h-10 p-2 w-10 from-indigo-500 to-indigo-800">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 className="mt-2">Powerful caching</h3>
          <p className="mt-2 dark:text-gray-400">
            The second pitfall we found with other options is poor cache hit
            ratios. Our caching systems are built to serve cached content at
            high throughput.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row gap-4 justify-center text-center mt-4">
        <div className="rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 h-80 p-10 shadow-sm w-80">
          <div className=" mx-auto rounded-lg text-white bg-gradient-to-r h-10 p-2 w-10 from-orange-500 to-orange-700">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 className="mt-2">Secure by default</h3>
          <p className="mt-2 dark:text-gray-400">
            Free &amp; easy HTTPs certificates and modern security features such
            as TLS v1.3, HSTS (HTTP strict transport security) and verified bot
            management.
          </p>
        </div>
        <div className="rounded-lg border border-gray-300 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 h-80 p-10 shadow-sm w-80">
          <div className=" mx-auto rounded-lg text-white bg-gradient-to-r h-10 p-2 w-10 from-green-500 to-green-700">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z"></path>
              <path
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 className="mt-2">Coverage, everywhere</h3>
          <p className="mt-2 dark:text-gray-400">
            We've focused our efforts on placing fewer, but more powerful PoPs
            strategically around the world, based off NVMe disks and high speed
            CPUs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Futures;
