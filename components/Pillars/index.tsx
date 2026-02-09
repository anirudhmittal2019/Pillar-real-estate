import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import PillarCard from './components/PillarCard';
import styles from './Pillar.module.scss';

interface iPillarCards {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  path?: string;
}

const pillarCardsContent: iPillarCards[] = [
  {
  image: '/landingpage/institution-quality.png',
  title: 'Apartments',
  subtitle: 'Buy & Rent Verified Homes',
  description:
    'Explore well-located apartments available for rent or purchase. Verified listings, transparent pricing, and properties suited for families, professionals, and investors alike.',
},
  {
  image: '/landingpage/data-first.png',
  title: 'Independent Floors',
  subtitle: 'Spacious Homes for Rent & Buy',
  description:
    'Explore independent floors offering privacy, better layouts, and peaceful living. Ideal for families and professionals looking to rent or purchase low-density homes.',
},
  {
  image: '/landingpage/network-driven.png',
  title: 'Gated Communities',
  subtitle: 'Secure Living for Rent & Purchase',
  description:
    'Explore gated societies offering security, amenities, and a well-managed lifestyle. Find homes for rent or sale in trusted communities ideal for families and working professionals.',
},

  {
  image: '/landingpage/capital-structure.png',
  title: 'Villas',
  subtitle: 'Independent Luxury Homes',
  description:
    'Explore spacious villas available for rent or purchase. Ideal for families seeking privacy, larger living spaces, and premium locations with excellent connectivity.',
  path: '/sponsor',
  },
];

const Pillars = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/sponsor');
  };

  return (
    <section className={styles.pillars}>
      <h3>Our Pillars</h3>
      <div className={styles['pillars-content']}>
        <Grid container>
          {pillarCardsContent.map(({ title, subtitle, description, image, path }, index) => {
            const isLast = index === pillarCardsContent.length - 1;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <div
                  onClick={isLast ? handleNavigate : undefined}
                  style={{ cursor: isLast ? 'pointer' : 'default', width: '100%' }}>
                  <PillarCard
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    imageSrc={image}
                    styles={styles}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Pillars;
