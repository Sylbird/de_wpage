import Head from 'next/head';

import { PACKAGE_DATA } from 'utils/constants';

const { alias, description } = PACKAGE_DATA;

const Metadata: FC = () => {
  return (
    <Head>
      <title>{alias}</title>
      <meta
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        name="viewport"
      />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Metadata;
