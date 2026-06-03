import elevateMainLogo from "../assets/homepage-icons/elevatestarting-logo.svg";
import wordMap from "../assets/homepage-icons/wordmap.svg";
import curveElevate from "../assets/homepage-icons/curveelevate-logo.png";
export default function HeroSection() {
    return (
        <section className=" mx-auto">
            <div className="flex items-center w-[99vw] h-[115vh] relative justify-between bg-[#113D77]">
            <div className="container">
                <img src={wordMap} className="w-[130vh] h-[100vh] absolute top-[40vh]" alt="World map background" />
                <img src={curveElevate} className="w-[480px] h-[150px] absolute top-[48vh] left-[320px] " alt="Curve elevate" />
            </div>
            <div>
                <img src={elevateMainLogo} alt="Elevate logo" />
            </div>
            </div>
        </section>
    )
}