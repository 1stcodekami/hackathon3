import React from 'react'

const F_banner = () => {
  return (
    
    //  Section: CONCEPT Posts
      <div className="bg-[#FAF4F4] text-black py-20 font-poppins">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="text-start">
              <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
              <p className="text-lg text-gray-700">For all orders over $50, consectetur <br /> adipim scing elit.</p>
            </div>

            {/* Second Column */}
            <div className="text-start">
              <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
              <p className="text-lg text-gray-700">If the product has an issue, consectetur <br /> adipim scing elit.</p>
            </div>

            {/* Third Column */}
            <div className="text-start">
              <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
              <p className="text-lg text-gray-700">100% secure payments, consectetur <br /> adipim scing elit.</p>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default F_banner
