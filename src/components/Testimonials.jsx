function Testimonials() {
  return (
    <section id="testimonials" className="pb-16 md:pb-24 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Voices of Change</h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Real Stories, Real Impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-background rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-500"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "Grace Mission International truly changed my life through their bee farming program. As a woman in my village, I never thought I'd have my own sustainable income. Their training and support not only taught me bee keeping but also empowered me to become financially independent. It's more than just honey; it's hope!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <span className="font-medium text-sm">RD</span>
              </div>
              <div>
                <p className="font-medium">On behalf of Radha Devi</p>
                <p className="text-sm text-muted-foreground">Beneficiary (Bee Farming Program)</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-background rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-500"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "When I came to Grace Mission International, I had lost all hope. The 'Smile Beggary' program gave me not just shelter and food, but also genuine care and medical attention. More importantly, the skill development training has given me a new purpose. I now have the dignity to stand on my own feet. They truly made me smile again."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <span className="font-medium text-sm">RK</span>
              </div>
              <div>
                <p className="font-medium">On behalf of Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground">Beneficiary (Smile Beggary Program)</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-background rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-500"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="italic mb-4">
              "Our family sleeps peacefully knowing our grandmother is safe and well-cared for at the Grace Mission International Senior Citizen Home. The medical facilities are excellent, and the staff treat her like their own family. It's a true sanctuary, and we are forever grateful for their compassionate service."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                <span className="font-medium text-sm">AS</span>
              </div>
              <div>
                <p className="font-medium">On behalf of Anjali Sharma</p>
                <p className="text-sm text-muted-foreground">Family of Resident (Senior Citizen Home)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
