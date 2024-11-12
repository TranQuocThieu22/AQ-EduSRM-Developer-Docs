import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cấu trúc Thư mục Khoa học',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cấu trúc thư mục được tổ chức để hỗ trợ phát triển linh hoạt và dễ quản lý. 
        Mỗi module, component và phần tài nguyên đều có vị trí rõ ràng giúp việc duyệt và tìm kiếm nhanh chóng hơn.
      </>
    ),
  },
  {
    title: 'Quy tắc Mã hóa Chặt chẽ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Quy tắc mã hóa bao gồm hướng dẫn chi tiết về cách đặt tên biến, định nghĩa hàm, 
          và sử dụng component. Những quy tắc này đảm bảo mã nguồn dễ đọc, dễ bảo trì, và nhất quán.
      </>
    ),
  },
  {
    title: 'Sử dụng Tối đa Tính năng của React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Hệ thống được xây dựng trên nền tảng React, với cấu trúc linh hoạt cho phép mở rộng và tái sử dụng component.
      Bạn có thể tùy chỉnh giao diện mà vẫn giữ nguyên các phần như header và footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
