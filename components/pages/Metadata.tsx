import Head from 'next/head';

import { PACKAGE_DATA } from 'utils/constants';

const { alias, description } = PACKAGE_DATA;

const Metadata: FC = () => {
  return (
    <Head>
      <title>{alias}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Metadata;
