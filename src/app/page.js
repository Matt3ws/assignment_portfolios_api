import BoilerBox from '@/components/boilerplate/boilerbox';
import styles from './page.module.css';
import ImageSearch from '@/components/search/imageSearch/imageSearch';

export default async function Page() {
  return (
    <main className={styles.page}>
      <ImageSearch />
    </main>
  );
}
