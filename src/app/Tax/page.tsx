// src/app/Tax/page.tsx
import TaxCalculator from "./TaxCalculator";

export const metadata = {
  title: "Probity Accountants",
  description:
    "Easily calculate your income tax in Sri Lanka based on the latest rates. Supports both monthly and annual income calculations.",
  keywords:
    "Sri Lanka tax calculator, income tax, salary tax, monthly tax, annual tax, Probity Accountants",
  openGraph: {
    title: "Income Tax Calculator | Probity Accountants",
    description:
      "Estimate your monthly or annual income tax based on the latest Sri Lanka tax rates.",
    url: "https://probityaccountants.com/tax-calculator",
    images: [
      {
        url: "/images/banner/tax-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Tax calculator illustration",
      },
    ],
  },
};

export default function TaxPage() {
  return <TaxCalculator />;
}
