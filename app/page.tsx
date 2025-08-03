import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Portfolio template!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
  <p className="mb-4">
    I'm <strong>Shubham Jain</strong>, a final-year B.Tech undergraduate in Electronics and Communication Engineering at IIIT Naya Raipur.
    I’m passionate about solving real-world problems through technology — whether it’s building scalable web applications,
    training machine learning models, or simulating antenna designs.
  </p>

  <p className="mb-4">My technical interests span:</p>

  <ul className="list-disc list-inside space-y-2 mb-6">
    <li>
      <strong>Web Development</strong>: Built multiple full-stack projects using Next.js, TailwindCSS, MongoDB, Prisma, and NextAuth.
    </li>
    <li>
      <strong>AI/ML</strong>: Worked on projects involving regression, classification, and computer vision using Python, Scikit-learn, and TensorFlow.
    </li>
    <li>
      <strong>Core ECE</strong>: Designed antennas in CST, performed circuit simulations in MATLAB and HSPICE, and developed embedded applications.
    </li>
    <li>
      <strong>FinTech & Markets</strong>: Self-taught stock market enthusiast with an understanding of brokerage platforms like Zerodha — including order execution, APIs, and stock data analytics.
    </li>
    <li>
      <strong>DSA & System Design</strong>: Continuously improving algorithmic thinking and problem-solving, with an eye toward backend architecture.
    </li>
  </ul>

  <p>
    I love building at the intersection of disciplines — whether it’s tech for finance, AI for hardware, or scalable systems for startups.
  </p>
      </div>
    </section>
  );
}
