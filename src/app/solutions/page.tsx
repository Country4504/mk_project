import type { Metadata } from 'next';
import SolutionsPage from '@/components/SolutionsPage';

export const metadata: Metadata = { title: '解决方案' };

export default function SolutionsRoute() {
  return <SolutionsPage />;
}
