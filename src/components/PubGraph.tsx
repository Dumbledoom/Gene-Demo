import React from 'react';
import { Chart } from 'react-google-charts';
import { PublicationsPerYear } from '../Utils';

interface PubGraphProps {
  pubData: PublicationsPerYear[][];
}

const PubGraph: React.FC<PubGraphProps> = (props: PubGraphProps) => {
  return (
    <Chart
      chartType="Bar"
      data={[['Year', 'Publications'], ...props.pubData]}
      width="95%"
      height="400px"
      style={{
        paddingTop: '12px',
        margin: '0 auto',
      }}
      legendToggle
      loader={<div>Loading Chart</div>}
      options={{
        // Material design options
        chart: {
          title: 'Yearly Publications',
          subtitle: 'Number of scientific publications on this gene per year',
        },
      }}
    />
  );
};

export default PubGraph;
