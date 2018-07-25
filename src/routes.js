import DefaultLayout from './layouts/DefaultLayout'
import FirebaseLayout from './layouts/FirebaseLayout'
import asyncComponent from './components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('./containers/home'))
const AsyncAbout = asyncComponent(() => import('./containers/about'))
const AsyncPosts = asyncComponent(() => import('./containers/posts'))
const AsyncRefEx = asyncComponent(() => import('./containers/ref'))
const AsyncFirebase = asyncComponent(() => import('./containers/firebase'))
const AsyncFirebaseChat = asyncComponent(() =>
  import('./containers/firebase/chat')
)
const AsyncFirebaseLogin = asyncComponent(() =>
  import('./containers/firebase/login')
)

export default [
  {
    layout: DefaultLayout,
    routes: [
      {
        path: '/',
        component: AsyncHome,
        exact: true
      },
      {
        path: '/about',
        component: AsyncAbout,
        exact: true
      },
      {
        path: '/posts',
        component: AsyncPosts,
        exact: true
      },
      {
        path: '/ref',
        component: AsyncRefEx,
        exact: true
      }
    ]
  },
  {
    layout: FirebaseLayout,
    routes: [
      {
        path: '/firebase',
        component: AsyncFirebase,
        exact: true
      },
      {
        path: '/firebase/chat',
        component: AsyncFirebaseChat,
        exact: true
      },
      {
        path: '/firebase/login',
        component: AsyncFirebaseLogin,
        exact: true
      }
    ]
  }
]
