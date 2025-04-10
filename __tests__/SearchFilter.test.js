import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/pages/index';

const mockPosts = [
  { id: 1, title: 'Hello World Post 1' },
  { id: 2, title: 'Next.js is Awesome Post 2' },
  { id: 3, title: 'React Testing Library Rocks Post 3' },
];

// Mock getStaticProps behavior
jest.mock('../src/pages/index', () => {
  const ActualHome = jest.requireActual('../src/pages/index').default;
  return function MockedHome(props) {
    return <ActualHome posts={mockPosts} />;
  };
});

describe('Search Filter', () => {
  it('filters posts based on search input', () => {
    render(<Home posts={mockPosts} />);

    // Expect all posts to be initially rendered
    expect(screen.getByText('Hello World Post 1')).toBeInTheDocument();
    expect(screen.getByText('Next.js is Awesome Post 2')).toBeInTheDocument();
    expect(screen.getByText('React Testing Library Rocks Post 3')).toBeInTheDocument();

    // Type into the search input
    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: 'next' },
    });

    // Now only "Next.js is Awesome" should be visible
    expect(screen.getByText('Next.js is Awesome Post 2')).toBeInTheDocument();
    expect(screen.queryByText('Hello World Post 1')).not.toBeInTheDocument();
    expect(screen.queryByText('React Testing Library Rocks Post 3')).not.toBeInTheDocument();
  });
});
