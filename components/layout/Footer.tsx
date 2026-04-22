import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl italic shadow-lg shadow-primary/30">
                W
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                Water<span className="text-primary">HeaterAzriel</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The most trusted water heater service provider in the region. Quality, safety, and speed are our top priorities.
            </p>
            <div className="flex gap-5">
              {[
                { icon: "fi fi-brands-instagram", href: "#" },
                { icon: "fi fi-brands-facebook", href: "#" },
                { icon: "fi fi-brands-twitter", href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <i className={`${social.icon} text-xl leading-none`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white tracking-tight">Quick Links</h4>
            <ul className="space-y-5">
              {["Services", "Why Us", "Pricing", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white tracking-tight">Our Services</h4>
            <ul className="space-y-5 text-muted-foreground">
              {["Installation", "Maintenance", "Repair", "Spare Parts", "Consultation"].map((service) => (
                <li key={service} className="hover:text-primary transition-colors cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-white tracking-tight">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-bold">081234567890</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-bold">hello@waterheater.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-white font-medium">Jakarta, Indonesia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © 2026 WaterHeater Pro. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-sm text-muted-foreground">Certified Partner</span>
            <span className="text-sm text-muted-foreground">Licensed Plumber</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
