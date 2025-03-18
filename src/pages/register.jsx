import React, { useState } from "react";
import 'tailwindcss'
const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    educationLevel: "",
    fieldOfStudy: "",
    institutionType: "",
    location: "",
    industry: "",
    companySize: "",
  });
  const [selectedPlan, setSelectedPlan] = useState("");
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1 && !userType) {
      newErrors.userType = "Please select a user type";
    }

    if (currentStep === 2) {
      if (!formData.fullName) newErrors.fullName = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Invalid email format";
      if (!formData.password) newErrors.password = "Password is required";
      else if (formData.password.length < 8)
        newErrors.password = "Password must be at least 8 characters";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    if (currentStep === 3) {
      if (userType === "Student") {
        if (!formData.educationLevel)
          newErrors.educationLevel = "Education level is required";
        if (!formData.fieldOfStudy)
          newErrors.fieldOfStudy = "Field of study is required";
      } else if (userType === "Institution") {
        if (!formData.institutionType)
          newErrors.institutionType = "Institution type is required";
        if (!formData.location) newErrors.location = "Location is required";
      } else if (userType === "Company") {
        if (!formData.industry) newErrors.industry = "Industry is required";
        if (!formData.companySize)
          newErrors.companySize = "Company size is required";
      }
    }

    if (currentStep === 4 && !selectedPlan) {
      newErrors.plan = "Please select a plan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log("Form submitted:", { userType, formData, selectedPlan });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      <header className="fixed top-0 w-full h-20 bg-[#0F172A]/90 backdrop-blur-sm z-50 border-b border-[#2563EB]/20">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-cube text-[#EC4899] text-3xl"></i>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#EC4899] to-[#2563EB] text-transparent bg-clip-text">
              Web3Nova
            </span>
          </div>
          <a
            href="https://readdy.ai/home/b2d6f77a-1f79-4a4c-9ca4-46d2982e31e0/141e5a61-5ab0-487c-a9e1-9257f96dd018"
            data-readdy="true"
            className="text-gray-400 hover:text-[#EC4899] transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back to Home
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep === step
                        ? "bg-gradient-to-r from-[#EC4899] to-[#2563EB]"
                        : currentStep > step
                          ? "bg-[#2563EB]"
                          : "bg-[#1E293B]"
                    }`}
                  >
                    {currentStep > step ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <span>{step}</span>
                    )}
                  </div>
                  <span className="mt-2 text-sm text-gray-400">
                    {step === 1
                      ? "User Type"
                      : step === 2
                        ? "Account"
                        : step === 3
                          ? "Profile"
                          : "Plan"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1E293B] p-8 rounded-lg border border-[#2563EB]/20">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Select User Type</h2>
                <div className="grid grid-cols-3 gap-6">
                  {["Student", "Institution", "Company"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setUserType(type)}
                      className={`p-6 rounded-lg border ${
                        userType === type
                          ? "border-[#EC4899] bg-[#EC4899]/10"
                          : "border-[#2563EB]/20 hover:border-[#EC4899]/50"
                      } transition-colors cursor-pointer`}
                    >
                      <i
                        className={`fa-solid ${
                          type === "Student"
                            ? "fa-user-graduate"
                            : type === "Institution"
                              ? "fa-building-columns"
                              : "fa-building"
                        } text-2xl mb-4`}
                      ></i>
                      <h3 className="text-lg font-semibold">{type}</h3>
                    </button>
                  ))}
                </div>
                {errors.userType && (
                  <p className="text-red-500 mt-2">{errors.userType}</p>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                    />
                    {errors.password && (
                      <p className="text-red-500 mt-1">{errors.password}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                {userType === "Student" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Education Level</label>
                      <select
                        value={formData.educationLevel}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            educationLevel: e.target.value,
                          })
                        }
                        className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                      >
                        <option value="">Select Level</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                        <option value="phd">PhD</option>
                      </select>
                      {errors.educationLevel && (
                        <p className="text-red-500 mt-1">
                          {errors.educationLevel}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2">Field of Study</label>
                      <input
                        type="text"
                        value={formData.fieldOfStudy}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fieldOfStudy: e.target.value,
                          })
                        }
                        className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                      />
                      {errors.fieldOfStudy && (
                        <p className="text-red-500 mt-1">
                          {errors.fieldOfStudy}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {userType === "Institution" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Institution Type</label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            institutionType: e.target.value,
                          })
                        }
                        className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                      >
                        <option value="">Select Type</option>
                        <option value="university">University</option>
                        <option value="college">College</option>
                        <option value="institute">Technical Institute</option>
                      </select>
                      {errors.institutionType && (
                        <p className="text-red-500 mt-1">
                          {errors.institutionType}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2">Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                      />
                      {errors.location && (
                        <p className="text-red-500 mt-1">{errors.location}</p>
                      )}
                    </div>
                  </div>
                )}

                {userType === "Company" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Industry</label>
                      <input
                        type="text"
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                      />
                      {errors.industry && (
                        <p className="text-red-500 mt-1">{errors.industry}</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2">Company Size</label>
                      <select
                        value={formData.companySize}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companySize: e.target.value,
                          })
                        }
                        className="w-full bg-[#0F172A] border-none px-4 py-2 rounded text-white"
                      >
                        <option value="">Select Size</option>
                        <option value="1-50">1-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                      {errors.companySize && (
                        <p className="text-red-500 mt-1">
                          {errors.companySize}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Select Your Plan</h2>
                <div className="grid grid-cols-3 gap-6">
                  {["Basic", "Professional", "Enterprise"].map((plan) => (
                    <button
                      key={plan}
                      onClick={() => setSelectedPlan(plan)}
                      className={`p-6 rounded-lg border ${
                        selectedPlan === plan
                          ? "border-[#EC4899] bg-[#EC4899]/10"
                          : "border-[#2563EB]/20 hover:border-[#EC4899]/50"
                      } transition-colors cursor-pointer`}
                    >
                      <h3 className="text-lg font-semibold mb-2">{plan}</h3>
                      <p className="text-2xl font-bold mb-4">
                        $
                        {plan === "Basic"
                          ? "49"
                          : plan === "Professional"
                            ? "99"
                            : "199"}
                        <span className="text-sm font-normal text-gray-400">
                          /month
                        </span>
                      </p>
                      <ul className="text-sm text-gray-400">
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-[#EC4899] mr-2"></i>
                          {plan === "Basic"
                            ? "500 Certificates"
                            : plan === "Professional"
                              ? "2000 Certificates"
                              : "Unlimited Certificates"}
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-[#EC4899] mr-2"></i>
                          {plan === "Basic"
                            ? "Basic API Access"
                            : plan === "Professional"
                              ? "Advanced API Access"
                              : "Custom API Integration"}
                        </li>
                      </ul>
                    </button>
                  ))}
                </div>
                {errors.plan && (
                  <p className="text-red-500 mt-2">{errors.plan}</p>
                )}
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  className="px-6 py-2 bg-[#0F172A] border border-[#2563EB]/20 rounded hover:border-[#EC4899]/50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="fa-solid fa-arrow-left mr-2"></i>
                  Previous
                </button>
              )}
              <button
                onClick={currentStep === 4 ? handleSubmit : handleNext}
                className="ml-auto px-6 py-2 bg-gradient-to-r from-[#EC4899] to-[#2563EB] rounded hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
              >
                {currentStep === 4 ? "Complete Registration" : "Next Step"}
                {currentStep < 4 && (
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;