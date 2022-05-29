import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='129' cy='148' r='102' />
    <rect x='0' y='268' rx='15' ry='15' width='280' height='30' />
    <rect x='0' y='316' rx='12' ry='12' width='280' height='90' />
    <rect x='0' y='434' rx='10' ry='10' width='120' height='27' />
    <rect x='162' y='424' rx='21' ry='21' width='110' height='46' />
  </ContentLoader>
);

export default Skeleton;
