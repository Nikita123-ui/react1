import Link from '../../Shared/Link';
import './Navigation.scss';
const Navigation = ({ nav }) => {
  return (
    <ul>
      {nav.map((nav, index) => (
        <li key={index}>
          <Link href={nav.url} className={nav.active} textDecoration={false}>
            {nav.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
// const Link = ({ children }) => {
//   return <a href={'#'}>{children}</a>;
// };
export default Navigation;
