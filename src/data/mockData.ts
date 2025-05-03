import { Review, Restaurant, Competitor, ChartData, CaviarInsight } from '../types';

export const restaurant: Restaurant = {
  id: '1',
  name: 'Urban Spice Kitchen',
  location: '123 Gourmet Ave, Foodie District',
  cuisine: ['Indian', 'Fusion', 'Contemporary'],
  avgRating: 4.3,
  totalReviews: 342,
  weeklyChange: 5.2,
  retentionRate: 72,
};

export const reviews: Review[] = [
  {
    id: '1',
    source: 'Google',
    rating: 5,
    content: 'Amazing food! The butter chicken was to die for. Will definitely be coming back again.',
    date: '2025-05-10',
    sentiment: 'positive',
    author: 'Michael T.',
  },
  {
    id: '2',
    source: 'Zomato',
    rating: 4,
    content: 'Great flavors, though the service was a bit slow during peak hours. The ambiance makes up for it though.',
    date: '2025-05-09',
    sentiment: 'positive',
    author: 'Sarah L.',
  },
  {
    id: '3',
    source: 'Swiggy',
    rating: 3,
    content: 'Food was good but delivery took longer than expected. Packaging could be improved.',
    date: '2025-05-08',
    sentiment: 'neutral',
    author: 'David K.',
  },
  {
    id: '4',
    source: 'Google',
    rating: 2,
    content: 'Disappointed with my recent visit. Food was cold and staff seemed uninterested in helping.',
    date: '2025-05-07',
    sentiment: 'negative',
    author: 'Rebecca M.',
  },
  {
    id: '5',
    source: 'Yelp',
    rating: 5,
    content: 'Exceptional dining experience! The chef came out to personally ensure we were enjoying our meal.',
    date: '2025-05-06',
    sentiment: 'positive',
    author: 'James D.',
  },
  {
    id: '6',
    source: 'Zomato',
    rating: 4,
    content: 'Nice variety in the menu. The desserts were particularly impressive.',
    date: '2025-05-05',
    sentiment: 'positive',
    author: 'Emily R.',
  },
  {
    id: '7',
    source: 'Google',
    rating: 1,
    content: 'Terrible experience. Overpriced and underwhelming. Would not recommend.',
    date: '2025-05-04',
    sentiment: 'negative',
    author: 'Ryan P.',
  },
  {
    id: '8',
    source: 'Swiggy',
    rating: 5,
    content: 'Ordered for a family gathering and everyone loved it! Prompt delivery too.',
    date: '2025-05-03',
    sentiment: 'positive',
    author: 'Jessica T.',
  },
];

export const competitors: Competitor[] = [
  {
    id: '1',
    name: 'Spice Garden',
    distance: 0.8,
    avgRating: 4.1,
    trend: 'up',
    category: ['Indian', 'Traditional'],
  },
  {
    id: '2',
    name: 'Flavor Fusion',
    distance: 1.2,
    avgRating: 4.5,
    trend: 'stable',
    category: ['Fusion', 'Modern'],
  },
  {
    id: '3',
    name: 'Tandoor Delights',
    distance: 2.1,
    avgRating: 3.9,
    trend: 'down',
    category: ['Indian', 'Casual'],
  },
  {
    id: '4',
    name: 'Curry House',
    distance: 2.5,
    avgRating: 4.0,
    trend: 'stable',
    category: ['Indian', 'Fast Casual'],
  },
  {
    id: '5',
    name: 'Gourmet Bites',
    distance: 2.7,
    avgRating: 4.3,
    trend: 'up',
    category: ['International', 'Fine Dining'],
  },
];

export const chartData: ChartData = {
  ratings: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Average Rating',
        data: [4.1, 4.0, 3.9, 4.2, 4.3, 4.5],
        borderColor: '#F97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 2,
      },
    ],
  },
  volume: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Review Volume',
        data: [42, 58, 65, 73, 82, 90],
        backgroundColor: '#F43F5E',
      },
    ],
  },
  sentiment: {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        label: 'Sentiment Distribution',
        data: [65, 20, 15],
        backgroundColor: ['#22C55E', '#EAB308', '#EF4444'],
      },
    ],
  },
};

export const caviarInsights: CaviarInsight[] = [
  {
    id: '1',
    type: 'praise',
    title: 'Exceptional Service',
    description: 'Your wait staff is frequently praised for attentiveness and friendliness, especially on weekends.',
    impact: 'high',
  },
  {
    id: '2',
    type: 'complaint',
    title: 'Wait Times',
    description: 'Several reviews mention long wait times during dinner rush (7-9pm). Consider adding additional staff during these hours.',
    impact: 'medium',
  },
  {
    id: '3',
    type: 'suggestion',
    title: 'Menu Expansion',
    description: "There's growing interest in more vegetarian options based on review analysis.",
    impact: 'medium',
  },
  {
    id: '4',
    type: 'trend',
    title: 'Rising Popularity',
    description: 'Your dessert selections have seen a 27% increase in positive mentions over the last month.',
    impact: 'high',
  },
  {
    id: '5',
    type: 'praise',
    title: 'Signature Dish',
    description: 'The Butter Chicken has received exceptional feedback, with over 90% positive reviews.',
    impact: 'high',
  },
  {
    id: '6',
    type: 'complaint',
    title: 'Ambience Concerns',
    description: 'Some customers find the lighting too dim during evening hours, making menu reading difficult.',
    impact: 'low',
  },
];

export const wordCloudData = [
  { text: 'Delicious', value: 64 },
  { text: 'Service', value: 42 },
  { text: 'Ambiance', value: 28 },
  { text: 'Tasty', value: 35 },
  { text: 'Spicy', value: 22 },
  { text: 'Expensive', value: 15 },
  { text: 'Friendly', value: 30 },
  { text: 'Quality', value: 25 },
  { text: 'Fresh', value: 20 },
  { text: 'Authentic', value: 18 },
  { text: 'Portion', value: 12 },
  { text: 'Wait', value: 10 },
  { text: 'Staff', value: 28 },
  { text: 'Flavorful', value: 22 },
  { text: 'Presentation', value: 16 },
  { text: 'Clean', value: 14 },
  { text: 'Value', value: 15 },
  { text: 'Atmosphere', value: 20 },
  { text: 'Recommendation', value: 18 },
  { text: 'Menu', value: 16 }
];