
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'modern-rajasthan-villa',
    title: 'Modern Rajasthan Villa',
    category: 'Residential',
    location: 'Udaipur, India',
    description: 'A seamless blend of traditional Mewari architecture and contemporary minimalist interiors.',
    details: 'This 12,000 sq. ft. villa utilizes locally sourced marble and handcrafted sandstone. The interior features bespoke walnut cabinetry and Italian lighting fixtures.',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6199f7a009?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ],
    materials: ['White Makrana Marble', 'Solid Walnut', 'Linen Textiles', 'Brass Accents'],
    testimonial: {
      quote: "The Chic Decor transformed our vision into a sanctuary that honors our heritage while embracing modern luxury.",
      client: "Private Client, Udaipur"
    }
  },
  {
    id: 'urban-chic-apartment-kota',
    title: 'Urban Chic Apartment',
    category: 'Residential',
    location: 'Kota, Rajasthan',
    description: 'Sophisticated metropolitan living with a focus on functional elegance and light.',
    details: 'A high-rise apartment designed for a young family, featuring open-plan living and custom acoustic paneling.',
    thumbnail: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512918766671-ad6519635583?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200'
    ],
    materials: ['Engineered Oak', 'Polished Concrete', 'Velvet Upholstery'],
  },
  {
    id: 'luxury-hotel-lobby',
    title: 'Grand Heritage Hotel Lobby',
    category: 'Hospitality',
    location: 'Jaipur, India',
    description: 'A dramatic, large-scale arrival experience for a 5-star heritage property.',
    details: 'Integrating gold-leaf details with modern geometric flooring patterns to create a sense of timeless opulence.',
    thumbnail: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200'
    ],
    materials: ['24k Gold Leaf', 'Italian Terrazzo', 'Hand-knotted Silk Rugs'],
  },
  {
    id: 'tech-hub-hq',
    title: 'Creative Tech Headquarters',
    category: 'Commercial',
    location: 'Bangalore, India',
    description: 'Designing for productivity and innovation in a high-growth environment.',
    details: 'Biophilic design principles applied to corporate spaces to enhance employee well-being and brand identity.',
    thumbnail: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
    ],
    materials: ['Recycled Aluminum', 'Moss Walls', 'Smart Glass'],
  },
  {
    id: 'minimalist-penthouse',
    title: 'Azure Penthouse',
    category: 'Residential',
    location: 'Mumbai, India',
    description: 'Sky-high luxury with panoramic sea views and a monochrome palette.',
    details: 'Minimalist approach to emphasize the natural horizon, utilizing bespoke glass partitions and hidden storage.',
    thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6f3ea?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200'
    ],
  },
  {
    id: 'boutique-retail-space',
    title: 'The Silk Road Boutique',
    category: 'Commercial',
    location: 'New Delhi, India',
    description: 'An immersive retail experience for high-end fashion.',
    details: 'Soft lighting and rich textures create an intimate environment for luxury shopping.',
    thumbnail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=1200'
    ],
  },
  {
    id: 'spa-retreat-himalayas',
    title: 'Himalayan Zen Spa',
    category: 'Hospitality',
    location: 'Rishikesh, India',
    description: 'Tranquil wellness spaces inspired by the serenity of the mountains.',
    details: 'Using slate, stone, and cedar wood to ground the senses in a luxury retreat setting. Every element is designed to promote mindfulness and physical restoration.',
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200'
    ],
    materials: ['Natural Slate', 'Cedar Wood', 'Woven Bamboo', 'Handmade Ceramics'],
  }
];
