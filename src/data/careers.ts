import type { LucideIcon } from 'lucide-react';
import { Briefcase, User, Wrench } from 'lucide-react';

export interface CareerJobRole {
  id: string;
  title: string;
  icon: LucideIcon;
  location: string;
  roleType: string;
  experienceLevel: string;
  travelSummary: string;
  gradient: string;
  backgroundClass: string;
  borderClass: string;
  accentTextClass: string;
  highlights: string[];
  shortDescription: string;
  fullDescription: string;
  roleDetails: string[];
  experienceNeeded: string[];
  benefits: string[];
  travel: string;
  locations: string;
  contact: string;
  contactName: string;
  image: string;
}

export const careerJobRoles: CareerJobRole[] = [
  {
    id: 'fieldService',
    title: 'Field Service Technician',
    icon: Wrench,
    location: 'North America',
    roleType: 'Full-time',
    experienceLevel: '2+ years',
    travelSummary: '90% travel required',
    gradient: 'from-blue-500 to-blue-600',
    backgroundClass: 'bg-blue-50',
    borderClass: 'border-blue-200',
    accentTextClass: 'text-blue-600',
    highlights: [
      'Work with cutting-edge recycling equipment at customer facilities across North America',
      'Collaborate with experienced technicians to deliver turnkey installations and maintenance',
      'Develop deep expertise across mechanical, electrical, and hydraulic systems'
    ],
    shortDescription: 'Turn-key installation, service and maintenance of recycling machinery across North America',
    fullDescription:
      'Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. Van Dyk is a rapidly growing company and we are constantly seeking additional service technicians for the installation and service of large industrial recycling equipment installations.',
    roleDetails: [
      'Handle turn-key installation, service and maintenance of all machinery sold by Van Dyk',
      'Troubleshoot, repair and resolve issues with equipment (electrical, hydraulic, mechanical)',
      'Maintain customer contact for installation, training, or service',
      'Perform preventive maintenance inspections on machines',
      'Train customers on safe operating procedures and preventative maintenance'
    ],
    experienceNeeded: [
      'Knowledge of electrical, mechanical, and/or hydraulic systems and schematics',
      'Ability to read electrical and hydraulic diagrams, connection drawings and mechanical drawings',
      'Comfort working with 480 volt electrical systems',
      'Large machinery troubleshooting experience (highly valued)',
      'Solid verbal communication skills in English',
      'Excellent customer relations skills - you are our company ambassador',
      'Willingness to work outside normal hours and spend nights on location'
    ],
    benefits: [
      'Salaried position with paid overtime for work beyond 8 hours per business day',
      'Weekend work and travel considered overtime',
      '20 paid vacation days and 8 paid holidays',
      'Paid health insurance for you, spouse, and dependent children',
      'Paid dental insurance for family',
      'Paid $250,000 life insurance policy',
      'Profit-sharing pension plan + 401K plan',
      'High degree of independence in internationally active organization',
      'Plenty of opportunities for personal development'
    ],
    travel: '90% of jobs require travel; 60% within designated territory near your home',
    locations: 'United States, Canada, Mexico, Central America',
    contact: 'achirca@vdrs.com',
    contactName: 'Alin Chirca',
    image: '/Images/image-1749759487003.png'
  },
  {
    id: 'mechanicalInstaller',
    title: 'Mechanical Installer',
    icon: Briefcase,
    location: 'North America',
    roleType: 'Full-time',
    experienceLevel: '1+ years',
    travelSummary: '90% travel required',
    gradient: 'from-orange-500 to-orange-600',
    backgroundClass: 'bg-orange-50',
    borderClass: 'border-orange-200',
    accentTextClass: 'text-orange-600',
    highlights: [
      'Assemble full recycling systems alongside a close-knit installation crew',
      'Gain exposure to conveyors, screens, optical sorters, and retrofits',
      'Build trusted relationships with customers through on-site collaboration'
    ],
    shortDescription: 'Mechanical installation of complete recycling systems and equipment',
    fullDescription:
      'Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. Van Dyk is a family-owned, rapidly growing company, and we are constantly seeking additional mechanical installers for the installation of large industrial recycling equipment.',
    roleDetails: [
      'Responsible for mechanical installation of all machinery sold by Van Dyk',
      'Install single pieces of equipment or complete sorting systems',
      'Work with conveyors, screens, balers and optical sorters',
      'Receive hands-on experiential learning training',
      'Travel to sites and shadow veteran mechanics on installations',
      'Maintain customer contact during installation process'
    ],
    experienceNeeded: [
      'Experience erecting heavy equipment',
      'Experience working with related large machinery (preferred)',
      'Strong work ethic and willingness to heed advice',
      'Ability to work diligently in unsupervised settings',
      'Solid verbal communication skills in English',
      'Additional languages (Spanish, French, Dutch, German, Polish) are an advantage'
    ],
    benefits: [
      'Salaried position with paid overtime for work beyond 8 hours per business day',
      'Weekend work and travel considered overtime',
      '20 paid vacation days and 8 paid holidays',
      'Fully funded health insurance for you, spouse, and dependent children',
      'Company-funded HSA to fully cover deductibles',
      'Paid dental insurance for family',
      'Paid $250,000 life insurance policy',
      'Profit-sharing pension plan (7-12% of salary)',
      'Additional 401K plan offer',
      'High degree of independence with strong growth opportunities'
    ],
    travel: '90% of jobs require travel within the United States',
    locations: 'United States, Canada, Mexico',
    contact: 'achirca@vdrs.com',
    contactName: 'Alin Chirca',
    image: '/Images/image-1749759490576.png'
  },
  {
    id: 'internships',
    title: 'Internships',
    icon: User,
    location: 'Norwalk, CT',
    roleType: 'Internship',
    experienceLevel: 'Student/Recent Grad',
    travelSummary: 'Minimal travel',
    gradient: 'from-green-500 to-green-600',
    backgroundClass: 'bg-green-50',
    borderClass: 'border-green-200',
    accentTextClass: 'text-green-600',
    highlights: [
      'Rotate through engineering, data, and operations teams in Norwalk, CT',
      'Receive mentorship on CAD, analytics, and equipment optimization projects',
      'Contribute to real-world recycling initiatives from day one'
    ],
    shortDescription: 'Learn data engineering, drawing, and sorting machine operations in Norwalk',
    fullDescription:
      'Van Dyk Recycling Solutions offers challenging internship opportunities in our Norwalk, CT headquarters focusing on data engineering, technical drawing, and sorting machine operations.',
    roleDetails: [
      'Work on data engineering projects for recycling analytics',
      'Learn technical drawing and CAD design for sorting systems',
      'Understand sorting machine operations and optimization',
      'Collaborate with engineering teams on real projects',
      'Gain hands-on experience with recycling equipment',
      'Participate in equipment testing and validation processes'
    ],
    experienceNeeded: [
      'Students or recent graduates in engineering, computer science, or related fields',
      'Interest in data analysis and engineering systems',
      'Basic knowledge of technical drawing or CAD (preferred)',
      'Eagerness to learn and strong work ethic',
      'Ability to work independently and as part of a team',
      'Good communication skills in English'
    ],
    benefits: [
      'Valuable industry experience in recycling technology',
      'Mentorship from industry experts',
      'Professional network building',
      'Potential for future full-time employment',
      'Exposure to cutting-edge recycling technology',
      'Skills development in data engineering and technical drawing'
    ],
    travel: 'Based in Norwalk, CT - no travel required',
    locations: 'Norwalk, Connecticut headquarters',
    contact: 'info@vdrs.com',
    contactName: 'Van Dyk HR Team',
    image: '/Images/image-1749759499434.png'
  }
];

export type { CareerJobRole as JobRole };
