import { ClipboardList, CheckCircle, Plug, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Bundle',
      description: 'Select the services you need—SIM card, bank account, housing, insurance, or all of them. Customize your bundle to fit your needs.',
      icon: <ClipboardList className="h-12 w-12" />,
    },
    {
      number: '02',
      title: 'Set Up Before Arrival',
      description: "Complete your setup online from anywhere in the world. We'll have everything ready and waiting for you when you land in the UK.",
      icon: <CheckCircle className="h-12 w-12" />,
    },
    {
      number: '03',
      title: 'Arrive & Plug In',
      description: 'Land in the UK and seamlessly connect to your new life. Your SIM card, bank account, and housing will be ready to go.',
      icon: <Plug className="h-12 w-12" />,
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 sm:mb-4">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Get set up in just three simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line - only show between items on desktop */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-indigo-200 lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
                  {step.icon}
                </div>
                <div className="mt-6">
                  <span className="text-sm font-semibold text-indigo-600">{step.number}</span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#services"
            className="inline-flex items-center w-1/2 justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-xl sm:w-auto sm:px-8 sm:py-3 sm:text-base"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

