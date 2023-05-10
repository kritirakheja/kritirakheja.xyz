import Head from "next/head";
import Image from 'next/image'

const jsonSchema = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kriti Rakheja",
    url: "https://kritirakheja.xyz",
    sameAs: [
      "https://twitter.com/kriti_rakheja",
      "https://www.linkedin.com/in/kriti-rakheja/",
      "https://uxstudio.wtf/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kriti Rakheja",
    url: "https://kritirakheja.xyz",
  },
]);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Head>
        <title>Kriti Rakheja — Founder, uxstudio.wtf</title>
        <meta
          name="description"
          content="A psychology enthusiast turned product strategist. With a passion for innovation and a knack for learning, I've spent the past few years immersing myself in the world of startups, tech, and product development."
        />
        <meta
          name="twitter:title"
          content="Kriti Rakheja — Founder, uxstudio.wtf"
        />
        <meta
          name="twitter:description"
          content="A psychology enthusiast turned product strategist. With a passion for innovation and a knack for learning, I've spent the past few years immersing myself in the world of startups, tech, and product development."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonSchema,
          }}
        />
      </Head>
      <section className="px-6 md:px-12 py-40 text-[#333333] flex-1">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-md">
            <Image
              className="w-16 h-16 rounded-full"
              src={require("../images/profile.jpg")}
              alt="Kriti Rakheja"
            />
            <h1 className="mt-8 text-4xl font-bold">Hey, I am Kriti 👋</h1>
            <p className="mt-4 text-xl leading-relaxed">
              A psychology enthusiast turned product strategist. With a passion
              for innovation and a knack for learning, I&apos;ve spent the past
              few years immersing myself in the world of startups, tech, and
              product development.
            </p>
            <p className="mt-6">
              Associate Product Manager at{" "}
              <a
                className="border-b border-current"
                href="https://www.dosteducation.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dost Education
              </a>
            </p>
            <div className="flex gap-4 py-6">
              <a
                aria-label="twitter"
                title="twitter"
                href="https://twitter.com/kriti_rakheja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3.80361C23 6.67647 21.3577 7.73529 21.3577 7.73529V8.5747C21.3577 14.6036 16.67 21.5 8.12676 21.5C5.47082 21.5 3.03622 20.7627 1 19.4614C3.44338 19.7607 5.91219 19.0817 7.86117 17.5964C5.82495 17.553 4.09859 16.2518 3.52314 14.4301C4.2429 14.5309 4.89236 14.5176 5.60362 14.3434C3.43329 13.9003 1.88531 11.9941 1.88531 9.83253C2.50503 10.1795 3.25754 10.353 4.01006 10.3964C2.00439 9.10881 1.30896 6.34966 2.5493 4.3241C4.85111 7.05663 8.30382 8.87831 12.1549 9.09518C12.0664 8.74819 12.0221 8.40121 12.0221 8.05422C12.0221 5.53855 14.1026 3.5 16.67 3.5C17.998 3.5 19.1932 4.02048 20.0785 4.93133C21.0966 4.71446 22.1147 4.3241 23 3.80361Z"
                    stroke="#3F3F3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                aria-label="linkedin"
                title="linkedin"
                href="https://www.linkedin.com/in/kriti-rakheja/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 18.5V14.5C11.5 12.8431 12.8431 11.5 14.5 11.5V11.5C16.1569 11.5 17.5 12.8431 17.5 14.5V18.5M7.5 18.5V11.5M8 8C8 8.27614 7.77614 8.5 7.5 8.5C7.22386 8.5 7 8.27614 7 8M8 8C8 7.72386 7.77614 7.5 7.5 7.5C7.22386 7.5 7 7.72386 7 8M8 8H7M2 14.5V10.5C2 7.69974 2 6.29961 2.54497 5.23005C3.02433 4.28924 3.78924 3.52433 4.73005 3.04497C5.79961 2.5 7.19974 2.5 10 2.5H14C16.8003 2.5 18.2004 2.5 19.27 3.04497C20.2108 3.52433 20.9757 4.28924 21.455 5.23005C22 6.29961 22 7.69974 22 10.5V14.5C22 17.3003 22 18.7004 21.455 19.77C20.9757 20.7108 20.2108 21.4757 19.27 21.955C18.2004 22.5 16.8003 22.5 14 22.5H10C7.19974 22.5 5.79961 22.5 4.73005 21.955C3.78924 21.4757 3.02433 20.7108 2.54497 19.77C2 18.7004 2 17.3003 2 14.5Z"
                    stroke="#3F3F3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                aria-label="email"
                title="email"
                href="mailto:hello@kritirakheja.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8.5L17 9.16667L16.4376 9.5416C14.8338 10.6108 14.0319 11.1454 13.1652 11.3531C12.3992 11.5366 11.6008 11.5366 10.8348 11.3531C9.96808 11.1454 9.16618 10.6108 7.5624 9.5416L7 9.16667L6 8.5M10 21.5H14C16.8003 21.5 18.2004 21.5 19.27 20.955C20.2108 20.4757 20.9757 19.7108 21.455 18.77C22 17.7004 22 16.3003 22 13.5V11.5C22 8.69974 22 7.29961 21.455 6.23005C20.9757 5.28924 20.2108 4.52433 19.27 4.04497C18.2004 3.5 16.8003 3.5 14 3.5H10C7.19974 3.5 5.79961 3.5 4.73005 4.04497C3.78924 4.52433 3.02433 5.28924 2.54497 6.23005C2 7.29961 2 8.69974 2 11.5V13.5C2 16.3003 2 17.7004 2.54497 18.77C3.02433 19.7108 3.78924 20.4757 4.73005 20.955C5.79961 21.5 7.19974 21.5 10 21.5Z"
                    stroke="#3F3F3F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-6 md:px-12 text-[#808080]">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Kriti Rakheja</span>
            <span>—</span>
            <div className="flex gap-4 py-6">
              <a
                aria-label="twitter"
                title="twitter"
                href="https://twitter.com/kriti_rakheja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3.80361C23 6.67647 21.3577 7.73529 21.3577 7.73529V8.5747C21.3577 14.6036 16.67 21.5 8.12676 21.5C5.47082 21.5 3.03622 20.7627 1 19.4614C3.44338 19.7607 5.91219 19.0817 7.86117 17.5964C5.82495 17.553 4.09859 16.2518 3.52314 14.4301C4.2429 14.5309 4.89236 14.5176 5.60362 14.3434C3.43329 13.9003 1.88531 11.9941 1.88531 9.83253C2.50503 10.1795 3.25754 10.353 4.01006 10.3964C2.00439 9.10881 1.30896 6.34966 2.5493 4.3241C4.85111 7.05663 8.30382 8.87831 12.1549 9.09518C12.0664 8.74819 12.0221 8.40121 12.0221 8.05422C12.0221 5.53855 14.1026 3.5 16.67 3.5C17.998 3.5 19.1932 4.02048 20.0785 4.93133C21.0966 4.71446 22.1147 4.3241 23 3.80361Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                aria-label="linkedin"
                title="linkedin"
                href="https://www.linkedin.com/in/kriti-rakheja/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 18.5V14.5C11.5 12.8431 12.8431 11.5 14.5 11.5V11.5C16.1569 11.5 17.5 12.8431 17.5 14.5V18.5M7.5 18.5V11.5M8 8C8 8.27614 7.77614 8.5 7.5 8.5C7.22386 8.5 7 8.27614 7 8M8 8C8 7.72386 7.77614 7.5 7.5 7.5C7.22386 7.5 7 7.72386 7 8M8 8H7M2 14.5V10.5C2 7.69974 2 6.29961 2.54497 5.23005C3.02433 4.28924 3.78924 3.52433 4.73005 3.04497C5.79961 2.5 7.19974 2.5 10 2.5H14C16.8003 2.5 18.2004 2.5 19.27 3.04497C20.2108 3.52433 20.9757 4.28924 21.455 5.23005C22 6.29961 22 7.69974 22 10.5V14.5C22 17.3003 22 18.7004 21.455 19.77C20.9757 20.7108 20.2108 21.4757 19.27 21.955C18.2004 22.5 16.8003 22.5 14 22.5H10C7.19974 22.5 5.79961 22.5 4.73005 21.955C3.78924 21.4757 3.02433 20.7108 2.54497 19.77C2 18.7004 2 17.3003 2 14.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                aria-label="email"
                title="email"
                href="mailto:hello@kritirakheja.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8.5L17 9.16667L16.4376 9.5416C14.8338 10.6108 14.0319 11.1454 13.1652 11.3531C12.3992 11.5366 11.6008 11.5366 10.8348 11.3531C9.96808 11.1454 9.16618 10.6108 7.5624 9.5416L7 9.16667L6 8.5M10 21.5H14C16.8003 21.5 18.2004 21.5 19.27 20.955C20.2108 20.4757 20.9757 19.7108 21.455 18.77C22 17.7004 22 16.3003 22 13.5V11.5C22 8.69974 22 7.29961 21.455 6.23005C20.9757 5.28924 20.2108 4.52433 19.27 4.04497C18.2004 3.5 16.8003 3.5 14 3.5H10C7.19974 3.5 5.79961 3.5 4.73005 4.04497C3.78924 4.52433 3.02433 5.28924 2.54497 6.23005C2 7.29961 2 8.69974 2 11.5V13.5C2 16.3003 2 17.7004 2.54497 18.77C3.02433 19.7108 3.78924 20.4757 4.73005 20.955C5.79961 21.5 7.19974 21.5 10 21.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
