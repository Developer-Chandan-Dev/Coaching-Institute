import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "My daughter improved so much in English after joining here. The teachers are really caring.",
      name: "Mrs. Verma",
      designation: "Product Manager at TechFlow",
      src: "/images/testimonials/mr-verma.jpg",
    },
    {   
      quote:
        "best coaching for junior classes in Kanpur. My son loves going every day.",
      name: "Mr. Singh",
      designation: "CTO at InnovateSphere",
      src: "/images/testimonials/ms-singh.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/images/testimonials/emily-watson.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/images/testimonials/james-kim.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/images/testimonials/lisa-thompson.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
