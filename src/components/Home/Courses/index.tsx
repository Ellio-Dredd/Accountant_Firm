"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const servicesData = [
    {
      title: "Accounting and Bookkeeping",
      description:
        "It is essential to record day to day transactions in a business, so that owners will be able to get understanding of progress of the business. So, we assist you to record your financial transactions using accounting software and prepare statement of profit and loss, statement of financial position and statement of cash flows.",
      benefits: [
        "Relevant, timely and informative financial data",
        "A guidance for the management of cash flows",
        "Creating a sound internal control system",
      ],
      imgSrc: "/images/services/Accounting and Bookkeeping.jpg",
      icon: "solar:document-text-linear",
    },
    {
      title: "Auditing and Assurance",
      description:
        "If you require third party assurance for your business records and functions, we provide independent opinion on the financial statements of the audited entity. Further this strengthens the confidence of the stakeholders.",
      services: [
        "Financial statement auditing",
        "Special purpose auditing",
        "Internal auditing",
      ],
      imgSrc: "/images/services/Auditing and Assurance.jpg",
      icon: "solar:shield-check-linear",
    },
    {
      title: "Tax and Consultancy",
      description:
        "The business needs to pay what they need to pay without paying higher or lower tax. So that, we advise you to planning of all relevant taxes to maximize your profits in a legal way. Our team consists from well experienced and qualified members in Accounting and Taxation.",
      imgSrc: "/images/services/Tax and Consultancy.jpg",
      icon: "solar:calculator-linear",
    },
    {
      title: "Company Secretary",
      description:
        "When running a company, you need to be aware of how complying with the Companies Act in Sri Lanka. We can help you by carrying out the following company secretarial duties for you.",
      services: [
        "Company formation",
        "Filling of statutory forms",
        "Preparation of all necessary documents (minutes and resolutions etc..)",
        "Maintenance of statutory records (share register and minute book etc..)",
        "General advise on company law in Sri Lanka",
      ],
      imgSrc: "/images/services/Company Secretary.jpg",
      icon: "solar:document-linear",
    },
    {
      title: "Human Resources Services",
      description:
        "Most important and highest expense of the business is relating to the staff. So that, we assist you to maintain documents, recording transactions and submission statutory documents.",
      services: [
        "Preparing of appointment letters",
        "Register of employees for Employees Trust Fund and Employees Provident Fund",
        "Monthly submission of EPF and ETF returns and advise on timely payments",
        "Preparation of monthly salary",
        "Advise clients regarding laws and regulations of prevailing labour laws in Sri Lanka",
        "Assist for all other labour matters when necessity",
      ],
      imgSrc: "/images/services/Human Resources Services.jpg",
      icon: "solar:users-group-rounded-linear",
    },
    {
      title: "Physical Verification of Inventory",
      description:
        "Our firm provides independent physical verification of inventory to ensure accuracy and reliability in your financial records. We conduct detailed on-site stock counts, reconcile physical quantities with book records, and identify discrepancies to help strengthen internal controls.",
      benefits: [
        "Maintain transparency",
        "Detect losses or inefficiencies",
        "Ensure compliance with audit and regulatory requirements",
      ],
      imgSrc: "/images/services/Physical Verification of Inventory.jpg",
      icon: "solar:clipboard-list-linear",
    },
    {
      title: "Physical Verification of Fixed Assets",
      description:
        "We offer comprehensive physical verification of fixed assets to ensure accurate asset records and safeguard your company's resources. Our team verifies the physical existence, condition, and location of assets, reconciles them with the fixed asset register, and identifies missing or obsolete items.",
      benefits: [
        "Asset management",
        "Supports audit compliance",
        "Ensures reliable financial reporting",
      ],
      imgSrc: "/images/services/Physical Verification of Fixed Assets.jpg",
      icon: "solar:building-linear",
    },
    {
      title: "Other Services",
      description:
        "We provide a comprehensive range of additional services to support your business needs.",
      services: [
        "Outsourcing services of Accounting and HR functions",
        "Property Valuation services",
        "Prepare business proposals",
        "Certification services for Visa and Bank Loan purposes financial statements",
        "Registration of Sri Lanka Customs and Tourist Board",
      ],
      imgSrc: "/images/services/Tax and Consultancy.jpg",
      icon: "solar:settings-linear",
    },
  ];

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20 cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <Icon
          icon="solar:arrow-right-linear"
          className="text-2xl text-primary"
        />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20 cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <Icon
          icon="solar:arrow-left-linear"
          className="text-2xl text-primary"
        />
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  return (
    <section id="services" className="py-10 bg-white">
      {/* Make container relative for absolute arrows */}
      <div className="container relative mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <h1 className="flex items-center justify-center font-semibold text-4xl mb-8 text-midnight_text">
          Our Services
        </h1>

        {/* Decorative Mobile Arrows */}
        <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center transform -translate-y-1/2 md:hidden z-10 pointer-events-none">
          <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
            <Icon
              icon="solar:arrow-left-linear"
              className="text-primary text-2xl"
            />
          </div>
          <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
            <Icon
              icon="solar:arrow-right-linear"
              className="text-primary text-2xl"
            />
          </div>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings}>
          {servicesData.map((service, index) => (
            <div key={index} className="px-3 pb-10">
              <div
                className="bg-white rounded-2xl shadow-course-shadow hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                style={{ height: "560px" }}
              >
                {/* Image */}
                <div className="relative h-48 flex items-center justify-center overflow-hidden">
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3">
                    <Icon
                      icon={service.icon}
                      className="text-primary text-2xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-midnight_text mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description.length > 150
                        ? `${service.description.substring(0, 150)}...`
                        : service.description}
                    </p>

                    {/* Benefits */}
                    {service.benefits && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <Icon
                                icon="solar:check-circle-linear"
                                className="text-green-500 mt-0.5 flex-shrink-0"
                              />
                              {benefit.length > 60
                                ? `${benefit.substring(0, 60)}...`
                                : benefit}
                            </li>
                          ))}
                          {service.benefits.length > 2 && (
                            <li className="text-xs text-primary font-medium">
                              +{service.benefits.length - 2} more benefits
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Services */}
                    {service.services && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                          Our Services:
                        </h4>
                        <ul className="space-y-1">
                          {service.services.slice(0, 2).map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-600"
                            >
                              <Icon
                                icon="solar:arrow-right-linear"
                                className="text-primary mt-0.5 flex-shrink-0"
                              />
                              {item.length > 60
                                ? `${item.substring(0, 60)}...`
                                : item}
                            </li>
                          ))}
                          {service.services.length > 2 && (
                            <li className="text-xs text-primary font-medium">
                              +{service.services.length - 2} more services
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 text-sm"
                    >
                      Learn More
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="text-lg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View All Services */}
        <div className="text-center mt-12">
          <Link
            href="/Services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
          >
            View All Services
            <Icon icon="solar:arrow-right-linear" className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
