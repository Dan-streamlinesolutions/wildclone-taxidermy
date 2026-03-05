import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const policyItems = [
  "It is the responsibility of the client to ensure that trophies are subjected to field preparation to acceptable standards.",
  "All Taxidermy work requires a 50% deposit before any work will commence, and the balance is due on completion of the trophies, before collection or shipping.",
  "Please note that no items will be exchanged or refunded. All goods not collected or final payment received, 3 months after completion will be sold to recoup costs.",
  "All goods remain the property of Wild Clone Taxidermy until fully paid. Wild Clone Taxidermy shall be entitled to sell such goods to cover the outstanding amount owed.",
  "Prices do not include VAT, Packaging, Transport, Admin, Documentation Fees & Crating, neither delivery nor postage.",
  "Work done is at the owner's risk. We are not responsible for any loss or damage to goods due to power or refrigeration failure, fire, strike, theft or act of God.",
  "Although great care is taken, we indemnify ourselves against hair slip and bacterial defects or damage which may occur.",
  "Products will be completed within 12 months from deposit payment received.",
  "Products will either be shipped via ocean or air, although great care is taken when preparing trophies for shipping, Wild Clone Taxidermy is not responsible for damage caused by freight forwarders or last-mile logistics providers.",
];

const Footer = () => {
  const [policyOpen, setPolicyOpen] = useState(false);

  return (
    <motion.footer className="bg-[#1a1a1a] border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + PHASA */}
          <div className="flex flex-col items-center md:items-start gap-6 lg:col-span-1">
            <img src="/images/Wild Clone.png" alt="Wild Clone Taxidermy" className="h-16 w-auto" />
            <img src="/images/S2yplh1DbUFF3qfoWSukRnpP6u8.png" alt="PHASA Member Badge" className="h-20 w-auto object-contain" />
          </div>

          {/* Pages */}
          <div className="text-center justify-self-center">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">Pages</h4>
            {["Home", "About", "Mounting Direction", "Gallery", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : item === "Mounting Direction" ? "/mounts" : `/${item.toLowerCase()}`}
                className="block font-body text-sm text-gray-light hover:text-foreground transition-colors mb-3"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="text-center justify-self-center">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">Socials</h4>
            <a href="#" className="block font-body text-sm text-gray-light hover:text-foreground transition-colors mb-3">Instagram</a>
            <a href="#" className="block font-body text-sm text-gray-light hover:text-foreground transition-colors mb-3">Facebook</a>
            <a href="#" className="block font-body text-sm text-gray-light hover:text-foreground transition-colors mb-3">Youtube</a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">Subscribe to our newsletter!</h4>
            <div className="flex max-w-xs">
              <input
                type="email"
                placeholder="Enter Your Email...."
                className="min-w-0 flex-1 bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-gray-medium focus:outline-none focus:border-gray-light rounded-l"
              />
              <button className="bg-foreground text-background font-body text-sm px-6 py-3 hover:bg-foreground/90 rounded-r transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fulfilment Policy */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <button
            onClick={() => setPolicyOpen(!policyOpen)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="font-heading text-sm font-semibold text-foreground tracking-widest uppercase">Fulfilment Policy</span>
            <motion.div animate={{ rotate: policyOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-4 h-4 text-gray-medium group-hover:text-foreground transition-colors" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {policyOpen && (
              <motion.div
                key="policy"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="pb-8 space-y-3">
                  {policyItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-gray-light rounded-full mt-1.5 shrink-0" />
                      <p className="font-body text-xs text-gray-light leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center font-body text-xs text-gray-medium">
          © 2025 Wild Clone Taxidermy. Built by Streamline Digital Solutions.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
