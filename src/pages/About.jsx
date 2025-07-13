"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <img
        src="\GSI_HEROIMGE.png"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className=" text-3xl font-bold  sm:text-4xl md:text-5xl">About Grace Mission International</h2>
            <h5 className="  text-xl font-bold tracking-tight sm:text-2xl md:text-3xl pt-2">Our Vision, Mission, and Values</h5>
            <p className="  mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto text-black font-semibold">
              Dedicated to Service, Driven by Compassion
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Grace Mission International is a non-governmental organization founded on the principles of compassion, empowerment, and sustainable development. Established as a charitable trust, we are committed to serving the most vulnerable sections of society and fostering an environment where every individual can live a life of dignity and purpose. Our dedicated team works tirelessly to implement programs that address core societal challenges and build resilient communities.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-background rounded-2xl overflow-hidden border-0 shadow-2xl">
                <div className=" relative">
                </div>
                <div className="p-6">
                  <h3 className=" text-center text-3xl font-bold mb-2">Our Core Values</h3>
                  <h3 className="text-xl font-semibold text-slate-600 text-center mb-2">Guiding Our Every Action</h3>
                  <p className="text-muted-foreground">
                    Our work is rooted in a strong set of values that define who we are and how we operate:
                    <ul className="pl-4">
                      <li className="list-disc"><b>Integrity:</b> We operate with transparency, accountability, and the highest ethical standards in all our endeavors.</li>
                      <li className="list-disc"><b>Empathy:</b> We approach every individual with understanding and compassion, recognizing their unique struggles and aspirations.</li>
                      <li className="list-disc"><b>Empowerment:</b> We believe in equipping individuals with the skills and resources they need to create their own sustainable futures.</li>
                      <li className="list-disc"><b>Sustainability:</b> Our programs are designed for long-term impact, focusing on solutions that benefit communities for generations to come.</li>
                    </ul>
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-background rounded-2xl overflow-hidden border-0 shadow-2xl">
                <div className=" relative">
                </div>
                <div className="p-6">
                  <h3 className=" text-center text-3xl font-bold mb-2">Our Government Partnerships</h3>
                  <h3 className="text-xl font-semibold text-slate-600 text-center mb-2">Collaborative Efforts for Greater Impact</h3>
                  <p className="text-muted-foreground">
                    Government Partnership & Funding:
                    <ul className="pl-4">
                      <li className="list-disc"><b>Flagship Programs Supported:</b> Our Senior Citizen Home and Smile Beggary Program receive vital support.</li>
                      <li className="list-disc"><b>Funded by:</b> The Government of India under the Ministry of Social Justice and Empowerment.</li>
                      <li className="list-disc"><b>Impact:</b> This partnership significantly expands our reach and allows us to provide high-quality, specialized care.</li>
                      <li className="list-disc"><b>Alignment:</b> Our efforts are directly aligned with national goals to uplift vulnerable populations.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}

export default About
