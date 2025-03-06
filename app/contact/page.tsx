import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Mail, Newspaper, Youtube, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    title: "Twitter",
    description: "Follow for daily insights and market analysis",
    icon: Twitter,
    url: "https://twitter.com/MCAssassin02",
    username: "@MCAssassin02",
  },
  {
    title: "Substack",
    description: "Subscribe to my in-depth newsletter",
    icon: Newspaper,
    url: "https://crypt0assassin.substack.com/",
    username: "Crypto Assassin's Substack",
  },
  {
    title: "Email",
    description: "Direct inquiries and collaboration",
    icon: Mail,
    url: "mailto:Crypt0Assassin@proton.me?subject=Inquiry%20from%20Crypto%20Assassin%20Website",
    username: "Crypt0Assassin@proton.me",
  },
  {
    title: "YouTube",
    description: "Subscribe for in-depth video content and analysis",
    icon: Youtube,
    url: "https://www.youtube.com/@CryptoAssassin01",
    username: "@CryptoAssassin01",
  },
]

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-7xl mx-auto bg-neutral-800/30 border-golden-500/20">
        <CardContent className="p-8">
          <h1 className="text-5xl font-bold mb-8 text-golden-500 text-center">Connect & Follow</h1>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {socialLinks.map((link) => (
              <Link key={link.title} href={link.url} className="group">
                <div className="h-full bg-neutral-700/50 p-4 rounded-lg border border-golden-500/10 hover:border-golden-500/30 transition-all duration-300 flex flex-col items-center text-center transform hover:translate-y-[-2px]">
                  <div className="mb-3 p-2 rounded-full bg-golden-500/10 group-hover:bg-golden-500/20 transition-colors duration-300">
                    <link.icon className="w-6 h-6 text-golden-500" />
                  </div>

                  <h2 className="text-lg font-semibold text-golden-400 mb-2 flex items-center gap-1">
                    {link.title}
                    <ExternalLink className="w-3 h-3 text-golden-500/50 group-hover:text-golden-500 transition-colors duration-300" />
                  </h2>

                  <p className="text-white text-xs mb-2">{link.description}</p>

                  <span className="text-golden-400 font-medium text-sm break-all">{link.username}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 bg-neutral-700/50 p-4 rounded-lg border border-golden-500/10">
            <h2 className="text-xl font-semibold mb-3 text-golden-400 text-center">Professional Inquiries</h2>
            <p className="text-white text-center text-sm leading-relaxed">
              For business opportunities, speaking engagements, or collaboration proposals, please reach out via email
              with a detailed description of your project.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

