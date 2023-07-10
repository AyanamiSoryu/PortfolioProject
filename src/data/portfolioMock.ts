import { type Portfolio } from '../types/portfolio'

const bigShrekImageAlias = {
  width: 100,
  height: 100,
  src: 'https://wallpapers.com/images/featured/shrek-funny-pictures-73z98a447jsj4j4u.jpg'
}

const smallShrekImageAlias = {
  width: 100,
  height: 100,
  src: 'https://i0.wp.com/cambridge105.co.uk/wp-content/uploads/2022/07/Shrek-the-Musical.jpg?fit=1200%2C675&ssl=1'
}

export const portfolioMock: Portfolio = [
  {
    id: '0',
    title: 'shrek',
    description: 'Shrek is Love',
    originWidth: 1253,
    originHeight: 698,
    source: [bigShrekImageAlias]
  },
  {
    id: '0',
    title: 'shrek',
    description: 'Shrek is Love',
    originWidth: 200,
    originHeight: 100,
    source: [smallShrekImageAlias]
  }
]
