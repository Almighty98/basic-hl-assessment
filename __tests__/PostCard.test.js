import { render, screen } from '@testing-library/react';
import PostCard from '../src/components/PostCard';
import '@testing-library/jest-dom';

describe('PostCard', () => {
  it('renders the post title and links to the detail page', () => {
    const title = 'Test Post Title';
    const id = 42;

    render(<PostCard title={title} id={id} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.closest('a')).toHaveAttribute('href', `/posts/${id}`);
  });
});
