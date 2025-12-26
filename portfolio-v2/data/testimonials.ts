export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  linkedIn?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Timmy is one of the best Mobile Engineers I've worked with. Timmy is uniquely talented; I'll liken him to a \"Barrel\" using the Barrel vs Ammunition metaphor to describe an employee. One of Timmy's greatest traits is the speed of execution while maintaining his quality of work (pixel-perfect designs, code quality, architecture). It was a pleasure having him at Grey and if I had the opportunity, I'd bring him back again.",
    author: 'Idorenyin Obong',
    role: 'CEO',
    company: 'Grey',
    linkedIn: 'https://www.linkedin.com/in/idorenyin-obong/'
  },
  {
    id: '2',
    quote: "Timilehin is an incredible mobile engineer. He is one of the best I have worked with. One of Timilehin's standout qualities is his deep understanding of mobile development frameworks and technologies. Whether it's iOS or Android, he has a way of turning complex ideas into elegant, user-friendly mobile applications. He also consistently delivers high-quality code and demonstrates a keen eye for detail in every project.",
    author: 'Kolakanmi Apanisile',
    role: 'Senior Software Engineer',
    company: 'Grey',
    linkedIn: 'https://www.linkedin.com/in/kolakanmi-apanisile/'
  },
  {
    id: '3',
    quote: "From the beginning, Timilehin has demonstrated strong technical skills and a high level of professionalism. His code is consistently thorough, aligns with acceptance criteria, and usually requires minimal revision during reviews. He also takes full ownership of the features he works on. He has led the implementation of several large and complex efforts on the team.",
    author: 'James Waller',
    role: 'Android Platform Tech Lead',
    company: 'Footlocker',
    linkedIn: 'https://www.linkedin.com/in/james-waller/'
  },
  {
    id: '4',
    quote: "I've had the privilege of working with Timilehin. He's an excellent developer with strong technical skills and a clear understanding of how to approach and analyze Jira tickets efficiently. What really stands out about him is his ability to collaborate seamlessly - whether it's with other developers or with QA - to make sure every feature is delivered with quality and precision.",
    author: 'Jigisha Shah',
    role: 'Software Quality Assurance',
    company: 'Footlocker',
    linkedIn: 'https://www.linkedin.com/in/jigisha-shah/'
  },
  {
    id: '5',
    quote: "Timilehin is not just a skilled engineer; he is also an excellent team player. He communicates effectively, collaborates seamlessly with colleagues, and is always willing to share knowledge and expertise. I highly recommend Timilehin to any team or organization seeking an experienced mobile developer.",
    author: 'Kolakanmi Apanisile',
    role: 'Senior Software Engineer',
    company: 'Grey',
    linkedIn: 'https://www.linkedin.com/in/kolakanmi-apanisile/'
  },
  {
    id: '6',
    quote: "Timilehin works independently and is effective at unblocking himself. He approaches problems thoughtfully and reaches out when collaboration is necessary. He is reliable in navigating technical challenges and does not require constant oversight. Working with Timilehin has been straightforward and dependable.",
    author: 'James Waller',
    role: 'Android Platform Tech Lead',
    company: 'Footlocker',
    linkedIn: 'https://www.linkedin.com/in/james-waller/'
  }
]