import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTag: React.FC<{
  title: string;
  description: string;
  resume: string;
  forceTitle?: boolean;
}> = ({ title, description, resume, forceTitle }) => {
  const _title: string =
    forceTitle === true
      ? title
      : `${title} - ${process.env.REACT_APP_META_MAIN_TILTE_LIGTH || ''}`;

  const meta: any[] = [
    {
      name: `description`,
      content: description,
    },
    //Open tags pour Faceboock et messenger
    {
      property: `og:title`,
      content: _title,
    },
    {
      property: `og:description`,
      content: description,
    },
    //Twitter
    {
      property: `twitter:card`,
      content: resume,
    },
    {
      property: `twitter:title`,
      content: _title,
    },
    {
      property: `twitter:description`,
      content: description,
    },
    ,
    {
      itemprop: `description`,
      content: description,
    },
  ];

  return <Helmet title={_title.toString()} meta={meta} />;
};

export default MetaTag;
