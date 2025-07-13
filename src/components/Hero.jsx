import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <img
          src="\GSI_HEROIMGE.png"
          alt="Hero section Image"
          className="w-full h-full object-cover brightness-[0.2]"
        />
      </div>
      <div className="container mx-auto relative z-10 py-16 md:py-20 lg:py-20">
        <div className="max-w-3xl space-y-2 text-white sm:pl-10 md:pl-20">
          <p className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Welcome to 
          </p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pl-2">
            Grace Mission International
          </h1>
          <p className="text-xl font-semibold text-gray-200 md:text-2xl">
            Empowering Communities, Transforming Lives
          </p>
          <p className="text-base  text-gray-200 md:text-base underline">
            A Charitable Trust Dedicated to Sustainable Change
          </p>
            <p className=" py-3 pl-3 text-lg md:text-xl text-gray-200 underline">Our Mission:</p>
            <ul className="pl-6 text-lg">
              <li className="list-disc animate__animated animate__backInLeft">Bee Farming for Rural Empowerment</li>
              <li className="list-disc animate__animated animate__backInLeft animate__delay-1s">Smile Beggary Program</li>
              <li className="list-disc animate__animated animate__backInLeft animate__delay-2s">Drugs De-addiction and Rehabilitation</li>
              <li className="list-disc animate__animated animate__backInLeft animate__delay-3s">Running Driving Training School</li>
              <li className="list-disc animate__animated animate__backInLeft animate__delay-4s">Senior Citizen Home</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
