import React from 'react'
import InfiniteMovingCards from './ui/infinite-moving-cards'

const testimonials = [
    {
      quote:
        "Shubham has proven to be an exceptional learner, particularly through his noteworthy contributions to the Capstone project. His ability to quickly grasp and adopt new concepts has been truly impressive. Recently, his work with AI as part of the curriculum has astounded me, showcasing his aptitude for navigating complex technologies and concepts. Overall, Shubham is a remarkable student who has exceeded my expectations in every way. I highly recommend him for any software engineering team!",
      name: "Ankur Bag",
      title: "Software Engineering Instructor, BrainStation",
    },
    {
      quote:
        "I would like to work with someone like Shubham anytime. He’s is smart and fast, technical savvy always updating his knowledge and skills, reliable and committed to the projects, prioritizing team, company and clients needs.",
      name: "Dante Lopez",
      title: "Service Delivery Manager, Microserve",
    },
    {
      quote: "Shubham is a proactive team-member, and a diligent coder. I enjoyed working with them on a full-stack project during our diploma program, and I couldn't have asked for a better programmer. Shubham is a great communicator; providing insightful and valuable feedback on our teams work, while being receptive and open to feedback themselves.",
      name: "Cory Bickford",
      title: "Software Engineer",
    },
    {
      quote:
        "I've had the great opportunity to collaborate with Shubham (Sam) in complex projects, including M&A and Intune implementation for a major insurance company in BC. We're also tackling a Working Model project for the government. Sam has shown a strong commitment to enhancing technical tasks and operations. He met the targets on time and kept track of his tasks efficiently. I wish him the best in his career transition and I am confident in his continued success.",
        name: "Pedro Paulo Donadon Guedes",
        title: "Lead Service Delivery Manager, Microserve",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
const Testimonials = () => {
  return (
    <section className="px-6 pb-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative right-0 top-0  lg:block">
        <h2 className="text-xl font-semibold text-accent sm:text-3xl mb-16">
          Testimonials
        </h2>
    <InfiniteMovingCards items={testimonials} />
  </div>
  </div>
  </section>
  )
}

export default Testimonials