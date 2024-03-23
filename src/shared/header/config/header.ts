import { IconName, IconSize } from 'src/shared/icon/IconButton';

interface MenuItem {
  name: IconName;
  size: IconSize;
  height: string;
  label: string;
  badge?: string;
}

const menu: MenuItem[] = [
  {
    name: 'note',
    size: 'small',
    height: '100%',
    label: '自分の記録'
  },
  {
    name: 'challenge',
    size: 'small',
    height: '100%',
    label: 'チャレンジ'
  },
  {
    name: 'info',
    size: 'small',
    height: '100%',
    label: 'お知らせ',
    badge: '1'
  }
];

export { menu };
