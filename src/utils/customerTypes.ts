// Customer types based on business categories
export const customerTypesByCategory: Record<string, string[]> = {
  'Retail & Shopping': [
    'Man',
    'Woman', 
    'Child',
    'Daily household buyers',
    'Fashion & clothing shoppers',
    'Gadget & electronics buyers',
    'Students',
    'Luxury & brand-conscious customers',
    'Bargain hunters',
    'Festival & seasonal shoppers',
    'Online buyers'
  ],
  
  'Food & Beverage': [
    'Man',
    'Woman',
    'Family diners',
    'Working professionals',
    'Students & youngsters',
    'Health-conscious eaters',
    'Luxury fine-dine customers',
    'Travelers',
    'Party-goers & social groups',
    'Delivery-only customers'
  ],
  
  'Health & Medical': [
    'Man',
    'Woman',
    'Patients',
    'Senior citizens',
    'Parents with kids',
    'Fitness enthusiasts',
    'Emergency patients',
    'Pregnant women',
    'Preventive healthcare customers',
    'Alternative medicine seekers'
  ],
  
  'Education': [
    'Man',
    'Woman',
    'School students',
    'College students',
    'Competitive exam aspirants',
    'Skill learners',
    'Working professionals',
    'Parents',
    'Online learners',
    'Hobby learners'
  ],
  
  'Hotels & Travel': [
    'Man',
    'Woman',
    'Business travelers',
    'Leisure travelers',
    'Luxury travelers',
    'Budget travelers',
    'Pilgrims & spiritual travelers',
    'Group tourists',
    'International tourists',
    'Local weekend travelers'
  ],
  
  'Services': [
    'Man',
    'Woman',
    'Regular customers',
    'First-time customers',
    'Business clients',
    'Individual customers',
    'Senior citizens',
    'Young professionals',
    'Students',
    'Families'
  ],
  
  'Professional Businesses': [
    'Man',
    'Woman',
    'Small business owners',
    'Corporate clients',
    'Startups',
    'Individual professionals',
    'Government clients',
    'Non-profit organizations',
    'Consultants',
    'Entrepreneurs'
  ],
  
  'Entertainment & Recreation': [
    'Man',
    'Woman',
    'Families with children',
    'Young adults',
    'Teenagers',
    'Senior citizens',
    'Fitness enthusiasts',
    'Sports fans',
    'Movie lovers',
    'Gaming enthusiasts'
  ]
};

// Get customer types for a specific category
export const getCustomerTypesForCategory = (category: string): string[] => {
  return customerTypesByCategory[category] || customerTypesByCategory['Services'];
};

// Check if a category has customer types defined
export const hasCategoryCustomerTypes = (category: string): boolean => {
  return category in customerTypesByCategory;
};