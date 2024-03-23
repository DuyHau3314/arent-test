import { FC, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import Row from 'src/layout/components/Row';
import SplitScreen from 'src/layout/components/SplitScreen';

import CircularPageLoader from '../../shared/page-loader/CircularPageLoader';
import BodyWeight from '../body-weight/components/BodyWeight';

const Header: LazyExoticComponent<FC> = lazy(() => import('../../shared/header/components/Header'));
const Footer: LazyExoticComponent<FC> = lazy(() => import('../../shared/footer/components/Footer'));
const DateAndAchievementRate: LazyExoticComponent<FC> = lazy(() => import('../date-achievement-rate/components/DateAndAchievementRate'));
const Meal: LazyExoticComponent<FC> = lazy(() => import('../meal/Meal'));

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Suspense fallback={<CircularPageLoader />}>
        <Header />
        <SplitScreen leftWidth={1.5} rightWidth={2} height="400px">
          <DateAndAchievementRate />
          <BodyWeight />
        </SplitScreen>

        <Meal />
        <Row marginTop={'2rem'}>
          <Footer />
        </Row>
      </Suspense>
    </div>
  );
};

export default Index;
