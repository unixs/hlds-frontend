import Link from 'next/link'

const MENU = [
  {
    path: 'home',
    title: 'Home',
  },
  {
    path: 'rating',
    title: 'Rating',
  },
  {
    path: 'servers',
    title: 'Servers',
  }
];
export function MainMenu() {
  return (
    <ul>
      {MENU.map((m) => (
        <li key={m.path}>
          <Link href={`/${m.path}`}>{m.title}</Link>
        </li>
      ))}
    </ul>
  )
}

function MainNavigation() {
  return (<nav>
    <MainMenu />
  </nav>);
}

export default MainNavigation;
