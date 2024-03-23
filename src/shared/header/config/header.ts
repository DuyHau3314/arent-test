import { IconName, IconSize } from 'src/shared/icon/IconButton';

interface MenuItem {
  name: IconName;
  size: IconSize;
  height: string;
  label: string;
  badge?: string;
  to: string;
}

const menu: MenuItem[] = [
  {
    name: 'note',
    size: 'small',
    height: '100%',
    label: '自分の記録',
    to: '/my-record'
  },
  {
    name: 'challenge',
    size: 'small',
    height: '100%',
    label: 'チャレンジ',
    to: '/challenge'
  },
  {
    name: 'info',
    size: 'small',
    height: '100%',
    label: 'お知らせ',
    badge: '1',
    to: '/notification'
  }
];

export { menu };
