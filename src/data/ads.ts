import { AdOffer } from '@/types';

export const adOffers: AdOffer[] = [
  {
    id: 'promo-course-terraform',
    title: 'New! Terraform Mastery Course',
    description:
      'Launch offer: 50% off for the first 200 students. Learn modules, state, workspaces, CI/CD, and cloud providers with hands-on labs.',
    ctaText: 'Grab Offer',
    ctaUrl: '/courses/terraform-infrastructure-as-code',
    image: '/images/promo/terraform-offer.jpg',
    badge: 'Limited Time',
    placement: ['top', 'sidebar', 'inline'],
    isEnabled: true,
  },
  {
    id: 'promo-youtube',
    title: 'Subscribe to CodeBattle on YouTube',
    description: 'Free weekly videos on DevOps, Cloud, and Programming. Join 10K+ learners!',
    ctaText: 'Subscribe',
    ctaUrl: 'https://www.youtube.com/@codebattle',
    image: '/images/promo/youtube.jpg',
    placement: ['sidebar'],
    isEnabled: true,
  },
];
