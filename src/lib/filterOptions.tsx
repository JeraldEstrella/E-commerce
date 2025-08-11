// Category-specific filter mapping (KEEP THIS - It's perfect!)
export const filterOptionsByCategory: Record<string, string[]> = {
  all: ['price', 'rating', 'brand'],
  electronics: [
    'brand',
    'price',
    'warranty',
    'rating',
    'screen_size',
    'storage',
  ],
  clothing: ['size', 'color', 'price', 'brand', 'rating', 'material', 'style'],
  shoes: [
    'size',
    'price',
    'brand',
    'rating',
    'walking',
    'running',
    'school',
    'color',
  ],
  books: ['price', 'rating', 'author', 'publisher', 'language', 'format'],
  home: ['price', 'rating', 'brand', 'room', 'material', 'style'],
  sports: ['price', 'rating', 'brand', 'sport_type', 'size'],
};

// Filter definitions with their options (HARDCODED - Industry Standard)
export const FILTER_DEFINITIONS = {
  price: {
    label: 'Price Range',
    type: 'range',
    options: [
      { value: '0-25', label: 'Under $25' },
      { value: '25-50', label: '$25 - $50' },
      { value: '50-100', label: '$50 - $100' },
      { value: '100-200', label: '$100 - $200' },
      { value: '200+', label: 'Over $200' },
    ],
  },
  rating: {
    label: 'Customer Rating',
    type: 'checkbox',
    options: [
      { value: '4+', label: '4+ Stars & Up' },
      { value: '3+', label: '3+ Stars & Up' },
      { value: '2+', label: '2+ Stars & Up' },
      { value: '1+', label: '1+ Stars & Up' },
    ],
  },
  brand: {
    label: 'Brand',
    type: 'checkbox',
    options: [], // Will be populated dynamically from API
  },
  size: {
    label: 'Size',
    type: 'checkbox',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: 'xxl', label: 'XXL' },
    ],
  },
  color: {
    label: 'Color',
    type: 'checkbox',
    options: [
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
    ],
  },
  warranty: {
    label: 'Warranty',
    type: 'checkbox',
    options: [
      { value: '1year', label: '1 Year' },
      { value: '2year', label: '2 Years' },
      { value: '3year', label: '3+ Years' },
      { value: 'lifetime', label: 'Lifetime' },
    ],
  },
  screen_size: {
    label: 'Screen Size',
    type: 'checkbox',
    options: [
      { value: 'under13', label: 'Under 13"' },
      { value: '13-15', label: '13" - 15"' },
      { value: '15-17', label: '15" - 17"' },
      { value: 'over17', label: 'Over 17"' },
    ],
  },
  storage: {
    label: 'Storage',
    type: 'checkbox',
    options: [
      { value: '128gb', label: '128GB' },
      { value: '256gb', label: '256GB' },
      { value: '512gb', label: '512GB' },
      { value: '1tb', label: '1TB+' },
    ],
  },
  material: {
    label: 'Material',
    type: 'checkbox',
    options: [
      { value: 'cotton', label: 'Cotton' },
      { value: 'polyester', label: 'Polyester' },
      { value: 'wool', label: 'Wool' },
      { value: 'silk', label: 'Silk' },
      { value: 'denim', label: 'Denim' },
    ],
  },
  walking: {
    label: 'Walking Shoes',
    type: 'checkbox',
    options: [
      { value: 'casual', label: 'Casual Walking' },
      { value: 'hiking', label: 'Hiking' },
      { value: 'trail', label: 'Trail Walking' },
    ],
  },
  running: {
    label: 'Running Shoes',
    type: 'checkbox',
    options: [
      { value: 'road', label: 'Road Running' },
      { value: 'trail_running', label: 'Trail Running' },
      { value: 'marathon', label: 'Marathon' },
      { value: 'sprint', label: 'Sprint' },
    ],
  },
  school: {
    label: 'School Shoes',
    type: 'checkbox',
    options: [
      { value: 'uniform', label: 'School Uniform' },
      { value: 'sports', label: 'School Sports' },
      { value: 'formal', label: 'Formal Events' },
    ],
  },
};

// Helper function to get filters for a specific category
export const getFiltersForCategory = (category: string) => {
  const filterKeys =
    filterOptionsByCategory[category] || filterOptionsByCategory.all;
  return filterKeys
    .map((key) => ({
      key,
      ...FILTER_DEFINITIONS[key as keyof typeof FILTER_DEFINITIONS],
    }))
    .filter((filter) => filter.label); // Remove undefined filters
};

// Helper function to get all available categories
export const getAvailableCategories = () => {
  return Object.keys(filterOptionsByCategory);
};
