import 'tailwindcss'
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as echarts from "echarts";
const Home = () => {
  const [isYearlyPricing, setIsYearlyPricing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        title: {
          text: "Academic Performance",
          textStyle: { color: "#fff" },
        },
        tooltip: { trigger: "axis" },
        xAxis: {
          type: "category",
          data: ["2020", "2021", "2022", "2023", "2024"],
          axisLabel: { color: "#fff" },
        },
        yAxis: {
          type: "value",
          axisLabel: { color: "#fff" },
        },
        series: [
          {
            data: [85, 88, 92, 95, 98],
            type: "line",
            smooth: true,
            lineStyle: { color: "#EC4899" },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(236, 72, 153, 0.4)",
                  },
                  {
                    offset: 1,
                    color: "rgba(236, 72, 153, 0)",
                  },
                ],
              },
            },
          },
        ],
      };
      chart.setOption(option);
    }
    if (achievementsRef.current) {
      const achievementChart = echarts.init(achievementsRef.current);
      const achievementOption = {
        animation: false,
        title: {
          text: "Achievement Distribution",
          textStyle: { color: "#fff" },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            data: [
              { value: 35, name: "Research Papers" },
              { value: 25, name: "Projects" },
              { value: 20, name: "Awards" },
              { value: 20, name: "Certifications" },
            ],
            label: {
              color: "#fff",
            },
          },
        ],
      };
      achievementChart.setOption(achievementOption);
    }
  }, []);
  const heroSlides = [
    {
      image:
        "https://public.readdy.ai/ai/img_res/e33e415499b4f9d8890bfad07e3b5476.jpg",
      title: "Revolutionize Your Future with Blockchain",
      subtitle: "Unlock the potential of Web3 technology",
    },
    {
      image:
        "https://public.readdy.ai/ai/img_res/d0ccad338fd822562a292340ee653c5f.jpg",
      title: "Secure. Scalable. Decentralized.",
      subtitle: "Building the foundation of tomorrow's internet",
    },
    {
      image:
        "https://public.readdy.ai/ai/img_res/124bfd998b1d5323ec554935c2b651db.jpg",
      title: "Experience the Future of Web3",
      subtitle: "Join the digital revolution today",
    },
  ];
  const workflowSteps = [
    {
      icon: "fa-solid fa-upload",
      title: "Upload Certificate",
      description:
        "Upload your academic certificate in supported formats (PDF, JPG, PNG)",
      image:
        "https://public.readdy.ai/ai/img_res/d39492bb596f828c1d6918e998a9dd19.jpg",
    },
    {
      icon: "fa-solid fa-fingerprint",
      title: "Verification Process",
      description:
        "AI-powered verification checks authenticity and validates with blockchain",
      image:
        "https://public.readdy.ai/ai/img_res/4acb7c18716c58e661432c4b84e890d7.jpg",
    },
    {
      icon: "fa-solid fa-shield-check",
      title: "Blockchain Storage",
      description: "Certificate data securely stored on decentralized network",
      image:
        "https://public.readdy.ai/ai/img_res/3c8ff590f4f4fc27456124d862c8da47.jpg",
    },
    {
      icon: "fa-solid fa-certificate",
      title: "Digital Badge",
      description:
        "Receive verified digital badge for sharing and verification",
      image:
        "https://public.readdy.ai/ai/img_res/78b771d48787e2a67fe979b897aed582.jpg",
    },
  ];
  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 49,
      yearlyPrice: 470,
      features: [
        "Up to 500 Certificates",
        "Basic Verification API",
        "Email Support",
        "Standard Security",
        "30-day Certificate History",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 99,
      yearlyPrice: 950,
      features: [
        "Up to 2000 Certificates",
        "Advanced API Access",
        "Priority Support",
        "Enhanced Security",
        "1-year Certificate History",
        "Bulk Verification",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      yearlyPrice: 1900,
      features: [
        "Unlimited Certificates",
        "Custom API Integration",
        "24/7 Dedicated Support",
        "Military-grade Security",
        "Unlimited History",
        "Custom Features",
        "SLA Guarantee",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full h-20 bg-[#0F172A]/90 backdrop-blur-sm z-50 border-b border-[#2563EB]/20">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-cube text-[#EC4899] text-3xl"></i>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#EC4899] to-[#2563EB] text-transparent bg-clip-text">
              Web3Nova
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="hover:text-[#EC4899] transition-colors cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-[#EC4899] transition-colors cursor-pointer"
            >
              Contact
            </a>
            <a
              href="https://readdy.ai/home/b2d6f77a-1f79-4a4c-9ca4-46d2982e31e0/05b92d34-289c-4334-ab9c-1d481e8ee05b"
              data-readdy="true"
            >
              <button className="!rounded-button px-6 py-2 bg-gradient-to-r from-[#EC4899] to-[#2563EB] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap">
                Get Started
              </button>
            </a>
          </nav>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#1E293B] border-none px-4 py-2 pr-10 !rounded-button text-sm focus:ring-2 focus:ring-[#EC4899] outline-none"
              />
              <i className="fa-solid fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="w-10 h-10 bg-[#1E293B] !rounded-button flex items-center justify-center cursor-pointer"
              >
                <i className="fa-solid fa-user text-[#EC4899]"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-20">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-[80vh]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
                  <div className="max-w-3xl mx-auto px-6">
                    <h1 className="text-6xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Workflow Section */}
      <section className="py-20 bg-[#1E293B]/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Certificate Verification System
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Our advanced blockchain-based system ensures the authenticity and
            security of your academic credentials
          </p>
          <div className="grid grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#0F172A] p-8 !rounded-button border border-[#2563EB]/20 hover:border-[#EC4899]/50 transition-colors group"
              >
                <div className="relative h-48 mb-6 overflow-hidden !rounded-button">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#EC4899] to-[#2563EB] !rounded-button flex items-center justify-center mb-6">
                  <i className={`${step.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Global Impact
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#0F172A] p-8 !rounded-button border border-[#2563EB]/20">
              <div className="text-5xl font-bold text-[#EC4899] mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">Universities</h3>
              <p className="text-gray-400">
                Leading institutions worldwide trust our platform
              </p>
            </div>
            <div className="bg-[#0F172A] p-8 !rounded-button border border-[#2563EB]/20">
              <div className="text-5xl font-bold text-[#EC4899] mb-4">
                100K+
              </div>
              <h3 className="text-xl font-semibold mb-2">Students</h3>
              <p className="text-gray-400">
                Active students managing their credentials
              </p>
            </div>
            <div className="bg-[#0F172A] p-8 !rounded-button border border-[#2563EB]/20">
              <div className="text-5xl font-bold text-[#EC4899] mb-4">
                2000+
              </div>
              <h3 className="text-xl font-semibold mb-2">Companies</h3>
              <p className="text-gray-400">
                Organizations verifying certificates daily
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 bg-[#1E293B]/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Pricing Plans</h2>
          <div className="flex items-center justify-center gap-4 mb-16">
            <span
              className={`${!isYearlyPricing ? "text-[#EC4899]" : "text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearlyPricing(!isYearlyPricing)}
              className="w-14 h-8 bg-[#0F172A] !rounded-button relative cursor-pointer"
            >
              <div
                className={`absolute w-6 h-6 bg-[#EC4899] !rounded-button top-1 transition-all ${
                  isYearlyPricing ? "left-7" : "left-1"
                }`}
              ></div>
            </button>
            <span
              className={`${isYearlyPricing ? "text-[#EC4899]" : "text-gray-400"}`}
            >
              Yearly
            </span>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#0F172A] p-8 !rounded-button border border-[#2563EB]/20 hover:border-[#EC4899]/50 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    ${isYearlyPricing ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400">
                    /{isYearlyPricing ? "year" : "month"}
                  </span>
                  {isYearlyPricing && (
                    <div className="text-[#EC4899] text-sm mt-2">Save 20%</div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-[#EC4899]"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full !rounded-button py-3 bg-gradient-to-r from-[#EC4899] to-[#2563EB] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">Meet Our Team</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Talented developers and designers working together to revolutionize
            blockchain technology
          </p>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-[#0F172A] p-6 !rounded-button border border-[#2563EB]/20 hover:border-[#EC4899]/50 transition-colors group">
              <div className="relative h-64 mb-6 overflow-hidden !rounded-button">
                <img
                  src="https://public.readdy.ai/ai/img_res/cb012b417c450bebb436b43d9e60148e.jpg"
                  alt="Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
              <p className="text-[#EC4899] mb-4">Lead Blockchain Developer</p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="bg-[#0F172A] p-6 !rounded-button border border-[#2563EB]/20 hover:border-[#EC4899]/50 transition-colors group">
              <div className="relative h-64 mb-6 overflow-hidden !rounded-button">
                <img
                  src="https://public.readdy.ai/ai/img_res/d10231178d1ce569c8d226629a481fa3.jpg"
                  alt="Michael Anderson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Anderson</h3>
              <p className="text-[#EC4899] mb-4">System Architect</p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="bg-[#0F172A] p-6 !rounded-button border border-[#2563EB]/20 hover:border-[#EC4899]/50 transition-colors group">
              <div className="relative h-64 mb-6 overflow-hidden !rounded-button">
                <img
                  src="https://public.readdy.ai/ai/img_res/039a6de4c27f5f3a824a779f472414b6.jpg"
                  alt="Jessica Williams"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Jessica Williams</h3>
              <p className="text-[#EC4899] mb-4">UI/UX Designer</p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="bg-[#0F172A] p-6 !rounded-button border border-[#2563EB]/20 hover:border-[#EC4899]/50 transition-colors group">
              <div className="relative h-64 mb-6 overflow-hidden !rounded-button">
                <img
                  src="https://public.readdy.ai/ai/img_res/a747737e1e7ebc58ca138073d8d1f2b2.jpg"
                  alt="Raj Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Raj Patel</h3>
              <p className="text-[#EC4899] mb-4">Full Stack Developer</p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-[#EC4899] transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0F172A] border-t border-[#2563EB]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <i className="fa-solid fa-cube text-[#EC4899] text-3xl"></i>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#EC4899] to-[#2563EB] text-transparent bg-clip-text">
                  Web3Nova
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing certificate verification through blockchain
                technology. Secure, transparent, and efficient.
              </p>
              <address className="text-gray-400 not-italic">
                <div className="flex items-center gap-2 mb-2">
                  <i className="fa-solid fa-location-dot text-[#EC4899]"></i>
                  <span>123 Blockchain Avenue, Silicon Valley, CA 94025</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-[#EC4899]"></i>
                  <span>contact@web3nova.com</span>
                </div>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    Integration Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    Developer Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#EC4899] transition-colors"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest features and releases.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#1E293B] border-none px-4 py-2 !rounded-button text-sm focus:ring-2 focus:ring-[#EC4899] outline-none flex-1"
                />
                <button className="!rounded-button px-4 py-2 bg-gradient-to-r from-[#EC4899] to-[#2563EB] hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2563EB]/20 pt-8 text-center">
            <p className="text-gray-400">
              <span className="bg-gradient-to-r from-[#EC4899] to-[#2563EB] text-transparent bg-clip-text">
                &copy; {new Date().getFullYear()} Web3Nova
              </span>
              <span className="mx-2">|</span>
              <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;