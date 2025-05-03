export interface Review {
  id: string;
  source: 'Google' | 'Zomato' | 'Swiggy' | 'Yelp';
  rating: number;
  content: string;
  date: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  author: string;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  cuisine: string[];
  avgRating: number;
  totalReviews: number;
  weeklyChange: number;
  retentionRate: number;
}

export interface Competitor {
  id: string;
  name: string;
  distance: number;
  avgRating: number;
  trend: 'up' | 'down' | 'stable';
  category: string[];
}

export interface MetricData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export interface ChartData {
  ratings: MetricData;
  volume: MetricData;
  sentiment: MetricData;
}

export interface CaviarInsight {
  id: string;
  type: 'praise' | 'complaint' | 'suggestion' | 'trend';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}