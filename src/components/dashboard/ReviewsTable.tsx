import React, { useState } from 'react';
import { Star, ArrowUpDown, Search } from 'lucide-react';
import Badge from '../ui/Badge';
import { Review } from '../../types';

interface ReviewsTableProps {
  reviews: Review[];
}

const ReviewsTable: React.FC<ReviewsTableProps> = ({ reviews }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Review;
    direction: 'ascending' | 'descending';
  } | null>(null);

  // Handle sorting
  const requestSort = (key: keyof Review) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Filter reviews based on search term
  const filteredReviews = reviews.filter((review) => {
    return (
      review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.source.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sort reviews
  const sortedReviews = React.useMemo(() => {
    let sortableReviews = [...filteredReviews];
    if (sortConfig !== null) {
      sortableReviews.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableReviews;
  }, [filteredReviews, sortConfig]);

  // Get sentiment badge variant
  const getSentimentVariant = (sentiment: string): 'success' | 'warning' | 'danger' => {
    switch (sentiment) {
      case 'positive':
        return 'success';
      case 'neutral':
        return 'warning';
      case 'negative':
        return 'danger';
      default:
        return 'warning';
    }
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-accent-500 fill-accent-500' : 'text-surface-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-medium overflow-hidden">
      {/* Table Header with Search */}
      <div className="p-4 border-b border-surface-200 flex flex-col md:flex-row justify-between md:items-center space-y-3 md:space-y-0">
        <h3 className="text-lg font-semibold text-surface-800">Customer Reviews</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg border border-surface-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-surface-50">
              <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">
                <button
                  onClick={() => requestSort('source')}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <span>Source</span>
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">
                <button
                  onClick={() => requestSort('date')}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <span>Date</span>
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">
                <button
                  onClick={() => requestSort('rating')}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <span>Rating</span>
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">Content</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">
                <button
                  onClick={() => requestSort('sentiment')}
                  className="flex items-center space-x-1 focus:outline-none"
                >
                  <span>Sentiment</span>
                  <ArrowUpDown size={14} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-100">
            {sortedReviews.length > 0 ? (
              sortedReviews.map((review) => (
                <tr key={review.id} className="hover:bg-surface-50">
                  <td className="px-4 py-3 text-sm font-medium text-surface-700">
                    {review.source}
                  </td>
                  <td className="px-4 py-3 text-sm text-surface-600">{review.date}</td>
                  <td className="px-4 py-3">{renderStars(review.rating)}</td>
                  <td className="px-4 py-3 text-sm text-surface-600 max-w-xs truncate">
                    <div className="flex items-center space-x-2">
                      <span>{review.content}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={getSentimentVariant(review.sentiment)}>
                      {review.sentiment.charAt(0).toUpperCase() + review.sentiment.slice(1)}
                    </Badge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-surface-500">
                  No reviews found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (simple version) */}
      <div className="p-4 border-t border-surface-200 flex justify-between items-center">
        <div className="text-sm text-surface-600">
          Showing <span className="font-medium">{sortedReviews.length}</span> of{' '}
          <span className="font-medium">{reviews.length}</span> reviews
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-surface-300 rounded text-surface-700 hover:bg-surface-50 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <button className="px-3 py-1 border border-surface-300 rounded text-surface-700 hover:bg-surface-50 disabled:opacity-50 disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsTable;