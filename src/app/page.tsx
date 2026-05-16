"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="medium"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Wave Salon"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Crafting Your Perfect Wave."
      description="Experience professional styling at Wave Salon, where artistry meets precision. Elevate your look with our bespoke hair care solutions."
      kpis={[
        {
          value: "15+",
          label: "Years Experience",
        },
        {
          value: "12k",
          label: "Satisfied Clients",
        },
        {
          value: "4.9",
          label: "Average Rating",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Book Appointment",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-looking-through-magazine_23-2148332487.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cosmetics-camera-near-laptop_23-2147778956.jpg",
          alt: "Cosmetics and camera near laptop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-interior-tattoo-master-workplace-modern-studio_574295-691.jpg",
          alt: "Beautiful interior of tattoo master workplace in modern studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/table-stylist-studio_23-2147784015.jpg",
          alt: "Table in stylist studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-beauty-products-table_23-2148360105.jpg",
          alt: "High angle beauty products on table",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-getting-her-hair-done-beauty-salon_23-2149167404.jpg",
          alt: "Woman getting her hair done at the beauty salon",
        },
      ]}
      avatarText="Join 12,000+ satisfied clients"
      marqueeItems={[
        {
          type: "text",
          text: "Luxury Salon",
        },
        {
          type: "text",
          text: "Expert Stylists",
        },
        {
          type: "text",
          text: "Eco-Conscious",
        },
        {
          type: "text",
          text: "Modern Aesthetic",
        },
        {
          type: "text",
          text: "Precision Cuts",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Philosophy"
      description={[
        "At Wave Salon, we believe your hair is a canvas. Our team combines technical expertise with a deep understanding of your personal style to create looks that truly resonate.",
        "We use only premium, eco-conscious products to ensure your hair stays healthy, vibrant, and beautiful long after you leave our chair.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Precision Cuts",
          description: "Expertly crafted cuts tailored to your facial structure and lifestyle.",
          tag: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/hairdressers-scissors-lying-dark-cloth_23-2148181907.jpg",
        },
        {
          id: "f2",
          title: "Artistic Coloring",
          description: "From natural highlights to bold fashion colors, we achieve your dream shade.",
          tag: "Trending",
          imageSrc: "http://img.b2bpic.net/free-photo/painting-color-palette-with-paper-sheet_23-2148575556.jpg",
        },
        {
          id: "f3",
          title: "Rejuvenating Spas",
          description: "Indulge in deep conditioning and scalp treatments for total relaxation.",
          tag: "Exclusive",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-getting-hair-washed-by-hairdresser-salon_633478-691.jpg",
        },
      ]}
      title="Our Signature Services"
      description="Tailored treatments for every hair type and style preference."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          title: "Styling",
          price: "$65",
          period: "/ session",
          features: [
            "Consultation",
            "Cut & Blowdry",
            "Style",
          ],
          button: {
            text: "Book Now",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/hair-equipment-paper-bag_23-2148352905.jpg",
        },
        {
          id: "pro",
          title: "Coloring",
          price: "$120",
          period: "/ session",
          features: [
            "All-Over Color",
            "Gloss",
            "Deep Treatment",
          ],
          button: {
            text: "Book Now",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-hairdresser-apron-holding-hair-comb-spray-bottle-looking-front-with-serious-face-standing-green-wall_141793-71788.jpg",
        },
        {
          id: "prem",
          title: "Treatment",
          price: "$180",
          period: "/ session",
          features: [
            "Balayage",
            "Toning",
            "Full Care Set",
          ],
          button: {
            text: "Book Now",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-hairdresser-apron-holding-trimmer-machine-gun-looking-front-with-serious-face-standing-orange-wall_141793-64811.jpg",
        },
      ]}
      title="Pricing Options"
      description="Transparent pricing for high-quality salon services."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "t1",
          name: "Elena Rossi",
          role: "Creative Director",
          description: "15+ years experience in editorial styling.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67192.jpg",
        },
        {
          id: "t2",
          name: "Marcus Chen",
          role: "Colorist Expert",
          description: "Specializes in balayage and color correction.",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blonde-female-dressed-white-t-shirt-waistcoat-grey-background_613910-9333.jpg",
        },
        {
          id: "t3",
          name: "Sarah Jenkins",
          role: "Senior Stylist",
          description: "Focuses on texturizing and modern cuts.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-with-flowers_23-2148916385.jpg",
        },
      ]}
      title="Meet The Experts"
      description="Our stylists are dedicated to continuous learning and bringing the latest techniques to your salon experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Architect",
          company: "Design Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-bride-before-event_23-2149860780.jpg",
        },
        {
          id: "2",
          name: "David Zhou",
          role: "Consultant",
          company: "Global Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/team-bride-celebrating-before-wedding_23-2149329119.jpg",
        },
        {
          id: "3",
          name: "Emma Watson",
          role: "Editor",
          company: "Fashion Weekly",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-satisfied-customer-making-ok-gesture_74855-2298.jpg",
        },
        {
          id: "4",
          name: "John Doe",
          role: "CEO",
          company: "Startup Co",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/makeup-artist-female-customer-looking-mobile-phone_329181-1952.jpg",
        },
        {
          id: "5",
          name: "Alice Brown",
          role: "Designer",
          company: "Creative Lab",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/curly-hair-problems-close-up-handsome-young-black-skinned-american-with-afro-haircut-casual-white-t-shirt-combing-hair-looking-camera-with-funny-face-expression_176420-12977.jpg",
        },
      ]}
      title="Client Stories"
      description="Discover what our clients think about their experience at Wave Salon."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Vogue",
        "Harper's Bazaar",
        "Allure",
        "Cosmopolitan",
        "Elle",
        "Glamour",
        "InStyle",
      ]}
      title="Trusted Partnerships"
      description="Proudly working with industry-leading brands."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do I book?",
          content: "You can book directly via our website booking button.",
        },
        {
          id: "q2",
          title: "Cancellation policy?",
          content: "Please cancel 24 hours in advance to avoid a fee.",
        },
        {
          id: "q3",
          title: "Do you offer consultations?",
          content: "Yes, we offer complimentary consultations for all services.",
        },
      ]}
      title="Frequently Asked"
      description="Quick answers to common questions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Visit Us"
      title="Ready to Transform?"
      description="Get in touch today to schedule your next appointment at Wave Salon."
      buttons={[
        {
          text: "Schedule Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Wave Salon"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Team",
              href: "#team",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Cuts",
              href: "#features",
            },
            {
              label: "Coloring",
              href: "#features",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Wave Salon | All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
