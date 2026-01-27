import Navbar from "@/components/Navbar";
import Hyperspeed from "@/components/Hyperspeed";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        <Hyperspeed
          effectOptions={{
            distortion: "xyDistortion",
            length: 400,
            roadWidth: 9,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 3,
            carLightsFade: 0.4,
            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 30,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.02, 0.05],
            lightStickHeight: [0.3, 0.7],
            movingAwaySpeed: [20, 50],
            movingCloserSpeed: [-150, -230],
            carLightsLength: [20, 80],
            carLightsRadius: [0.03, 0.08],
            carWidthPercentage: [0.1, 0.5],
            carShiftX: [-0.5, 0.5],
            carFloorSeparation: [0, 0.1],
            colors: {
              roadColor: 526344,
              islandColor: 657930,
              background: 0,
              shoulderLines: 1250072,
              brokenLines: 1250072,
              leftCars: [8195355, 11076889, 16715818],
              rightCars: [15855310, 15131313, 14670218],
              sticks: 15855310,
            },
          }}
        />

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-white">
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold">Hack GHRCE</h1>
          <CountdownTimer />
</div>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="about"
        className="min-h-screen bg-white px-10 pt-24"
      >
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 max-w-2xl text-gray-700">
          Hack GHRCE is a hackathon focused on innovation, creativity, and
          real-world problem solving.
        </p>
      </section>

      {/* PROBLEM STATEMENT */}
      <section
        id="problem"
        className="min-h-screen bg-gray-100 px-10 pt-24"
      >
        <h2 className="text-4xl font-bold">Problem Statement</h2>
        <p className="mt-4 max-w-2xl text-gray-700">
          Participants will tackle modern challenges using technology and
          teamwork.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen bg-black px-10 pt-24 text-white"
      >
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4">Email: hackghrce@example.com</p>
      </section>
    </>
  );
}
