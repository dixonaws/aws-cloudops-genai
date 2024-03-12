import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Straightforward',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       The Silver Lining curriculum was designed from the ground up to be understood by anyone
  //       wanting to skill up as a cloud operations engineer.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       We know there's a ton of content out there covering almost any topic. What we do is provide you with
  //         an outline of what you need to know to land your first job as a cloud operations engineer.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by AWS Solutions Architects',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       The content here was developed by experienced Solutions Architects who spend every day in the cloud.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
