import { FC, ReactElement } from 'react';
import LineChart from 'src/shared/chart/LineChart';

const BodyWeight: FC = (): ReactElement => {
  return (
    <div className="w-full" style={{ height: '500px' }}>
      <LineChart />
    </div>
  );
};

export default BodyWeight;
