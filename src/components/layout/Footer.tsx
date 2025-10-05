import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sreedeepnarayan",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sreedeepnarayan",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sreedeepnarayan",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@sreedeepnarayan.com",
    icon: Mail,
  },
];

const navigation = {
  professional: [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Resume", href: "/resume.pdf" },
  ],
  creative: [
    { name: "Photography", href: "#photography" },
    { name: "Blog", href: "#blog" },
    { name: "Ideas Lab", href: "#ideas" },
  ],
  connect: [
    { name: "Contact", href: "#contact" },
    { name: "Newsletter", href: "#newsletter" },
    { name: "Speaking", href: "#speaking" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Sreedeep Narayan</h3>
              <p className="mt-4 text-gray-300 max-w-md">
                Product Manager & Full Stack Engineer crafting digital
                experiences that bridge technology and creativity. Based in{" "}
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Bangalore, India
                </span>
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Professional
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.professional.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Creative
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.creative.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Connect
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.connect.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Sreedeep Narayan. All rights
              reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <p className="text-xs leading-5 text-gray-400">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}