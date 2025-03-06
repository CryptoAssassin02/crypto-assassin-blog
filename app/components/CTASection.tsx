import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Mail, Youtube, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    title: "Twitter",
    description: "Follow for daily insights and market analysis",
    icon: Twitter,
    url: "https://twitter.com/MCAssassin02",
    username: "@MCAssassin02",
  },
  {
    title: "Email",
    description: "Direct inquiries and collaboration",
    icon: Mail,
    url: "mailto:cryptoassassin01@gmail.com?subject=Inquiry%20from%20Crypto%20Assassin%20Website",
    username: "cryptoassassin01@gmail.com",
  },
  {
    title: "YouTube",
    description: "Subscribe for in-depth video content and analysis",
    icon: Youtube,
    url: "https://www.youtube.com/@CryptoAssassin01",
    username: "@CryptoAssassin01",
  },
]

export default function CTASection() {
  return (
    <section id="follow-subscribe" className="relative py-20 animate-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD700] tracking-wider text-center mb-12 sm:mb-16">
          Follow & Subscribe
        </h2>

        <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto mb-12">
          {socialLinks.map((link) => (
            <Link key={link.title} href={link.url} className="group">
              <Card className="h-full bg-neutral-800/50 hover:bg-neutral-700/50 border-golden-300 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-golden-500/10 group-hover:bg-golden-500/20 transition-colors duration-300">
                    <link.icon className="w-8 h-8 text-golden-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-golden-400 mb-2 flex items-center gap-2">
                    {link.title}
                    <ExternalLink className="w-4 h-4 text-golden-500/50 group-hover:text-golden-500 transition-colors duration-300" />
                  </h3>
                  <p className="text-white text-sm mb-3">{link.description}</p>
                  <span className="text-golden-400 font-medium text-sm break-all">{link.username}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-neutral-800/50 border-golden-300 border-opacity-20 hover:border-opacity-40 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-golden-400 mb-4 text-center">Subscribe to My Substack</h3>
              <div className="flex justify-center">
                <iframe
                  src="https://crypt0assassin.substack.com/embed"
                  width="100%"
                  height="320"
                  style={{ border: "1px solid #EEE", background: "white" }}
                  frameBorder="0"
                  scrolling="no"
                  title="Crypto Assassin Substack"
                  className="max-w-[480px] w-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

