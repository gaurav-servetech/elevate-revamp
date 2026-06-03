import arupaLogo from "../assets/client-strip/Arupa.svg";
import cl1Logo from "../assets/client-strip/CL1.svg";
import complyCoreLogo from "../assets/client-strip/ComplyCore.svg";
import qjumpersLogo from "../assets/client-strip/Qjumpers.svg";
import travellersLogo from "../assets/client-strip/travellers.svg";
import { Card } from "../components/ui/card";
import frame1 from "../assets/client-strip/serviceSectionIcon/Frame1.svg";
import frame2 from "../assets/client-strip/serviceSectionIcon/Frame2.svg";
import frame3 from "../assets/client-strip/serviceSectionIcon/Frame3.svg";
import frame4 from "../assets/client-strip/serviceSectionIcon/Frame4.svg";
import frame5 from "../assets/client-strip/serviceSectionIcon/Frame5.svg";
import frame6 from "../assets/client-strip/serviceSectionIcon/Frame6.svg";
import readMoreArrow from "../assets/nav/lets-connect.svg";

/** Add new logos here after exporting to `src/assets/client-strip/` */
const clientLogos = [
  { name: "CL1", src: cl1Logo },
  { name: "Arupa AI", src: arupaLogo },
  { name: "Happy Feet Travellers", src: travellersLogo },
  { name: "ComplyCore", src: complyCoreLogo },
  { name: "Qjumpers", src: qjumpersLogo },
];

const committedStats = [
  { label: "AI ML Delivery", value: "30+" },
  { label: "Satisfied Clients", value: "20+" },
  { label: "AI/ML Deliver Experience", value: "13+" },
  { label: "Talent Retention Rate", value: "90+", showArrow: true },
];

function LogoRow({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={duplicate || undefined}>
      {clientLogos.map((client) => (
        <div
          key={`${duplicate ? "dup-" : ""}${client.name}`}
          className="flex h-12 shrink-0 items-center justify-center px-8 sm:px-12 lg:px-14"
        >
          <img
            src={client.src}
            alt={duplicate ? "" : client.name}
            className="max-h-10 w-auto object-contain"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

function CommittedArea() {
  return (
    <section className="relative overflow-hidden bg-[#113D77] px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-16 xl:px-14">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] bg-gradient-to-l from-[#0c3268]/90 to-transparent lg:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Mobile/tablet: stacked | lg+: text left + 4 cards in one row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-10">
          <div className="lg:max-w-[320px] lg:shrink-0 xl:max-w-[300px]">
            <h2 className="text-[26px] font-bold leading-[1.2] text-white sm:text-3xl lg:text-[34px] lg:leading-[1.18] xl:text-[21px]">
              We Are Committed To Providing Superior Solutions With Our AI/ML Expertise
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#A1B1CB] sm:mt-5 sm:text-[15px] lg:text-[14px] lg:leading-4">
              We offer AI/ML solution development and cloud & on-premise deployment across industries.
              We have expertise in ML, DL, Gen AI, Federated learning, and agentic flow secure & scalable
              implementations.
            </p>
          </div>

          {/* sm/md: 2x2 grid | lg+: single row of 4 cards */}
          <div className="grid flex-1 grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
            {committedStats.map((stat) => (
              <div
                key={stat.label}
                className="relative flex min-h-[130px] flex-col rounded-3xl bg-white px-4 py-4 sm:min-h-[145px] sm:px-5 sm:py-5 lg:min-h-[210px] lg:px-4 lg:py-5"
              >
                <p className="text-[11px] font-medium leading-snug text-[#272935] sm:text-xs lg:text-[11px] xl:text-[15px]">
                  {stat.label}
                </p>
                <div className="my-2.5 h-px w-46 bg-black thickness-1 opacity-30  sm:my-3" />
                <p className="mt-auto text-1xl font-normal text-[#113D77] tracking-wide mb-[-13px]  sm:text-3xl lg:text-[28px] xl:text-[50px]">
                  {stat.value}
                </p>
                {stat.showArrow && (
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#113D77] text-white transition hover:bg-[#1a4d8f] sm:bottom-4 sm:right-4 sm:h-9 sm:w-9"
                    aria-label="Learn more"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ourservices() {
  return (
  <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 flex flex-col justify-center items-center" aria-label="Our services">
    <div className="text-center lg:gap-2 gap-[12px] xl:gap-2 max-w-[50vw] items-center mx-auto">
      <h2 className="flex gap-0.5 justify-center text-[18px] font-semibold tracking-wide leading-[1.2]">
        <div className="text-[#272935]">OUR</div>
        <div className="text-[#2365AA]">SERVICES</div>
      </h2>
      <br />
      <br />
      <h1 className="text-[26px] font-bold leading-[1.2] text-black sm:text-3xl lg:text-[34px] lg:leading-[1.18] tracking-[-1px] xl:text-[56px]">AI Solutions for Automation, Growth, and Innovation</h1>
    </div>
    <div className="grid grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 xl:gap-10 gap-5   lg:gap-8justify-center items-center mt-20">
      <Card className="card w-[350px] h-[270px] rounded-tl-[150px] bg-[#EFF7FC] border-none">
        <img src={frame1} className="w-[88px] h-[67px] mx-auto mt-0.2 mr-5" alt="Our Services" />
        <div className="flex flex-col mt-[-15px] ml-6 ">
        <h4 className="text-[35px] w-[50px] font-bold leading-[1.2] text-[#272935] sm:text-3xl lg:text-[34px] lg:leading-[1.18] tracking-[-4px] xl:text-[30px] opacity-[2px] tracking-[0.2px] ">IOT Solutions</h4>
        <p className="text-[#848B9B] w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>
      <Card className="card w-[350px] h-[270px] bg-[#2365AA] border-none">
        <img src={frame2} className="w-[200px] h-[210px] mx-auto mt-[-26px] mr-[-1px] rounded-bl-[150px]" alt="Our Services" />
        <div className="flex flex-col mt-[-50px] ml-6 ">
        <h3 className="text-[35px] w-[200px] font-semibold leading-[1.2] text-white sm:text-3xl lg:text-[34px] lg:leading-[1.18] tracking-[-4px] mt-[-80px] xl:text-[28px] opacity-[2px] tracking-[0.2px] ">Agentic AI Solutions</h3>
        <p className="text-white w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>
      <Card className="card w-[350px] h-[270px]  bg-[#EFF7FC] border-none">
        <img src={frame3} className="w-[91px] h-[89px] mx-auto mt-0.2 mr-5" alt="Our Services" />
        <div className="flex flex-col mt-[-15px] ml-6 ">
        <h4 className="text-[35px] w-[50px] font-bold leading-[1.2] text-[#272935] sm:text-3xl lg:text-[34px] lg:leading-[1.18] tracking-[-4px] xl:text-[30px] opacity-[2px] tracking-[0.2px] ">Video Analytics </h4>
        <p className="text-[#848B9B] w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>
      <Card className="card w-[350px] h-[270px] bg-[#EFF7FC] rounded-br-[150px] border-none">
        <img src={frame4} className="w-[121px] h-[94px] mx-auto mt-0.2 mr-5" alt="Our Services" />
        <div className="flex flex-col mt-[-15px] ml-6 ">
        <h4 className="text-[35px] w-[50px] font-bold leading-[1.2] text-[#272935] sm:text-3xl lg:text-[34px] lg:leading-[1.18] tracking-[-4px] xl:text-[30px] opacity-[2px] tracking-[0.2px] ">Cloud Deployment</h4>
        <p className="text-[#848B9B] w-[250px] tracking-tight mt-[10px] text-[16px]">ML/DL, Video Analytics, Audio Analytics and Federated Learning.</p>
        </div>
      </Card>   
    </div>
    <div className="flex justify-center items-center mt-[-39vh] mb-[120px]">
    
    <div className="flex flex-col justify-center items-center text-center relative mt-[-18px]">
      
    
     
      
      <img src={frame6} className="w-[70vw] h-[80vh] mb-[-35vh] mt-[39vh]" alt="Our Services" />
      <h1 className="text-[26px] font-bold leading-[1.2] text-black mt-[-160px] sm:text-3xl lg:text-[34px] lg:leading-[1.18] tracking-[-1px] xl:text-[36px] w-[50vw] text-center">Innovative Generative AI Solutions for Business Transformation</h1>
      <p className="w-[47vw] text-center text-[13.5px] mt-[20px]">We witness the evolution of Generative AI starting with TFIDF, advancing through word2vec and transformers, and then moving on to early large language models (LLMs) like BERT and T5. This progression includes the OpenAI GPT models, Google Gemini, OLAMA, and the implementation of Agentic flow. Since the beginning, we have provided value starting from fine-tuned on-premise Named Entity Recognition (NER) models to the current state-of-the-art Agentic implementation by building a generic agentic framework.</p>
      <button className="bg-[#2365AA] text-white px-4 py-2 rounded-full w-[8vw] h-[6vh] flex items-center justify-center text-[8.5px] uppercase mt-[20px] gap-2">
        <span>read more</span>
        <img src={readMoreArrow} className="w-[2vw] h-[2vw] mr-[-20px]" alt="Our Services" />

      </button>
      </div> 
      
      <img src={frame5} className="w-[500px] h-[500px]  absolute left-[-70px]  mb-[-700px] " alt="Our Services" />
    </div>
    
    
  </section>
)
};

export default function ClientStrip() {
  return (
    <>
      <section className="client-strip relative overflow-hidden bg-white py-6" aria-label="Our customers">
        <div className="client-strip__track flex w-max items-center">
          <LogoRow />
          <LogoRow duplicate />
        </div>
      </section>

      <CommittedArea />
      <Ourservices />
    </>
  );
}
