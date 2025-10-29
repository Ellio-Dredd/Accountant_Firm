"use client";

import React, { FC, useState } from "react";
import { IncomeType, TaxResult } from "@/types/tax";

const TaxCalculator: FC = () => {
  const [income, setIncome] = useState<string>("");
  const [type, setType] = useState<IncomeType>("monthly");
  const [tax, setTax] = useState<number | null>(null);
  const [effectiveRate, setEffectiveRate] = useState<number | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Thousand separators
  const formatNumber = (num: number | string): string => {
    const str = num.toString().replace(/,/g, "");
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(raw))) {
      setIncome(formatNumber(raw));
    }
  };

  const calculateTax = (): void => {
    const value = parseFloat(income.replace(/,/g, ""));
    if (isNaN(value) || value <= 0) {
      setMessage({ type: "error", text: "⚠️ Please enter a valid income amount." });
      return;
    }

    let taxAmount = 0;

    if (type === "monthly") {
      if (value <= 150000) taxAmount = 0;
      else if (value <= 233333) taxAmount = value * 0.06 - 9000;
      else if (value <= 275000) taxAmount = value * 0.18 - 37000;
      else if (value <= 316667) taxAmount = value * 0.24 - 53500;
      else if (value <= 358333) taxAmount = value * 0.30 - 72500;
      else taxAmount = value * 0.36 - 94000;
    } else {
      if (value <= 1800000) taxAmount = 0;
      else if (value <= 2800000) taxAmount = value * 0.06 - 108000;
      else if (value <= 3300000) taxAmount = value * 0.18 - 444000;
      else if (value <= 3800000) taxAmount = value * 0.24 - 642000;
      else if (value <= 4300000) taxAmount = value * 0.30 - 870000;
      else taxAmount = value * 0.36 - 1128000;
    }

    const result: TaxResult = {
      taxAmount,
      effectiveRate: (taxAmount / value) * 100,
    };

    setTax(result.taxAmount);
    setEffectiveRate(result.effectiveRate);
    setMessage({ type: "success", text: "Tax calculated successfully!" });
  };

  return (
    <section id="tax-calculator" className="w-full bg-[#f7f7f7] py-16 mt-[70px]">
      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
          Income Tax Calculator
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <p className="text-gray-600 text-center mb-8">
            Quickly estimate your monthly or annual income tax based on the latest Sri Lanka tax rates.
          </p>

          {/* Input Field */}
          <div className="mb-5">
            <label className="block font-medium text-gray-800 mb-1">Enter Income (LKR)</label>
            <input
              type="text"
              value={income}
              onChange={handleIncomeChange}
              placeholder="e.g. 250,000"
              className="w-full border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type Selection */}
          <div className="flex justify-center gap-6 mb-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "monthly"}
                onChange={() => setType("monthly")}
                className="accent-blue-600"
              />
              <span className="text-gray-800">Monthly</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={type === "annual"}
                onChange={() => setType("annual")}
                className="accent-blue-600"
              />
              <span className="text-gray-800">Annual</span>
            </label>
          </div>

          {/* Button */}
          <button
            onClick={calculateTax}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Calculate
          </button>

          {/* Alert Message */}
          {message && (
            <div
              className={`mt-4 text-center py-2 rounded-lg font-medium ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Results */}
          {tax !== null && (
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-gray-700">
                Tax Payable:{" "}
                <span className="text-blue-600">
                  LKR {formatNumber(Number(tax.toFixed(2)))}
                </span>
              </p>
              <p className="text-md text-gray-600 mt-2">
                Effective Rate:{" "}
                <span className="font-semibold text-green-600">
                  {effectiveRate?.toFixed(2)}%
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
