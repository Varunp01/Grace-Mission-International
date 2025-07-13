"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Form from "../components/Form"

function Contact() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-1 container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <Form></Form>
            {/* <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form> */}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Address</h3>
                <address className="not-italic">
                  Dimapur, Nagaland
                  <br />
                  India-797112
                </address>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p>+91 9667552376</p>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p>shojilayimchunger8@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
