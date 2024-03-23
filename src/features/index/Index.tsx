import { FC, lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import Row from 'src/layout/components/Row';
import SplitScreen from 'src/layout/components/SplitScreen';

import CircularPageLoader from '../../shared/page-loader/CircularPageLoader';
import BodyWeight from '../body-weight/components/BodyWeight';
import DateAndAchievementRate from '../date-achievement-rate/components/DateAndAchievementRate';
import MealHistory from '../meal-history/components/MealHistory';
import TransitInput from '../transit-input/components/TransitInput';

const Header: LazyExoticComponent<FC> = lazy(() => import('../../shared/header/components/Header'));
const Footer: LazyExoticComponent<FC> = lazy(() => import('../../shared/footer/components/Footer'));

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Suspense fallback={<CircularPageLoader />}>
        <Header />
        <SplitScreen leftWidth={1.5} rightWidth={3}>
          <DateAndAchievementRate />
          <BodyWeight />
        </SplitScreen>

        <Row marginX="10%">
          <TransitInput />
        </Row>

        <Row>
          <MealHistory />
        </Row>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
