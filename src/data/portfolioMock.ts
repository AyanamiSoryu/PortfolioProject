import { type Portfolio } from '../@types/portfolio';

const bigShrekImageAlias = {
  width: 100,
  height: 100,
  src: 'https://wallpapers.com/images/featured/shrek-funny-pictures-73z98a447jsj4j4u.jpg'
};

const smallShrekImageAlias = {
  width: 100,
  height: 100,
  src: 'https://i0.wp.com/cambridge105.co.uk/wp-content/uploads/2022/07/Shrek-the-Musical.jpg?fit=1200%2C675&ssl=1'
};

const tallShrekImageAlias = {
  width: 100,
  height: 100,
  src: 'https://i.redd.it/hxok6q5skdf61.jpg'
};

const largeShrekImageAlias = {
  width: 100,
  height: 100,
  src: 'https://s.yimg.com/ny/api/res/1.2/NvAuQagDh1Li21Hq21DlGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMxNg--/https://media.zenfs.com/en/buzzfeed_articles_778/2fef0be25b6343c5dbf349561ab37a3c'
};

const tinyShrekImageAlias = {
  width: 1242,
  height: 1166,
  src: 'https://wallpapers.com/images/hd/shrek-funny-pictures-ux3ftp99c2wz7pwc.jpg'
};
const portfolioMock: Portfolio = [
  {
    id: '0',
    title: 'shrek',
    description: 'Shrek is Love',
    size: 1,
    originWidth: 1253,
    originHeight: 698,
    source: [bigShrekImageAlias]
  },
  {
    id: '1',
    title: 'shrek',
    description: 'Shrek is Love',
    size: 3,
    originWidth: 615,
    originHeight: 960,
    source: [tallShrekImageAlias]
  },
  {
    id: '2',
    title: 'shrek',
    description: 'Shrek is Love',
    size: 3,
    originWidth: 1200,
    originHeight: 675,
    source: [smallShrekImageAlias]
  },
  {
    id: '3',
    title: 'shrek',
    description: 'Shrek is Love',
    size: 3,
    originWidth: 639,
    originHeight: 316,
    source: [largeShrekImageAlias]
  },
  {
    id: '4',
    title: 'shrek',
    description: 'Shrek is Love',
    size: 2,
    originWidth: 615,
    originHeight: 960,
    source: [tallShrekImageAlias]
  },
  {
    id: '5',
    title: 'shrek',
    description: 'Shrek is HUY',
    size: 2,
    originWidth: 615,
    originHeight: 960,
    source: [tallShrekImageAlias]
  },
  {
    id: '6',
    title: 'shrek',
    description: 'Shrek is LOVE',
    size: 3,
    originWidth: 1242,
    originHeight: 1166,
    source: [tinyShrekImageAlias]
  },
  {
    id: '7',
    title: 'shrek',
    description: 'Shrek is LOVE',
    size: 3,
    originWidth: 1242,
    originHeight: 1166,
    source: [tinyShrekImageAlias]
  },
  {
    id: '8',
    title: 'shrek',
    description: 'Shrek is LOVE',
    size: 3,
    originWidth: 1242,
    originHeight: 1166,
    source: [tinyShrekImageAlias]
  }
];
export default portfolioMock;
