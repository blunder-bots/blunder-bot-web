import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpeg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpeg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function TalkToTeam() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="talktoteam">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20  font-mono">
            <h2 className="h2 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">Explore the voices of our team members and gain insight into our company culture and values through their personal perspectives.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800  font-mono" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                "At Blunder Bots Technologies, we believe that success is in the details. We're passionate about not just meeting, but exceeding expectations by meticulously implementing every minor detail, because it's in these nuances that excellence truly shines."</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Umar Farooq</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out text-sm" href="https://www.linkedin.com/in/umarfarooq478/">Chief Executive Officer</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800  font-mono" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">                "Our unwavering commitment to customer satisfaction and unwavering dedication to delivering top-quality products and services are at the core of our mission."</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic text-sm">Shaheer Ilyas</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out text-sm" href="#0">Chief Technical Officer</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800  font-mono" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">"At Blunder Bot Technologies, our strength lies in our diversity of services. From mobile and web app development to staff augmentation, we're a one-stop solution, adapting and evolving to meet the dynamic needs of our clients."</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Awais Naeem</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out text-sm" href="http://www.linkedin.com/in/awais-naeem-00b563246">Chief Business Officer</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
