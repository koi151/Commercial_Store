import About from "../pages/About/about";
import Blog from "../pages/Blog/blog";
import Contact from "../pages/Contact/contact";
import Error404 from "../pages/Error404/error404";
import Home from "../pages/Home/home";
import Layout from "../components/Layout/layout";

import BlogNews from "../pages/Blog/BlogNews/blogNews";
import BlogRelated from "../pages/Blog/BlogRelated/blogRelated";
import Products from "../pages/Products/products";
import Cart from "../pages/Cart/cart";

// DATA
export const routes = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <Products />
          }
        ]
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'blog',
        element: <Blog name='Blog'/>,
        children: [
          {
            path: 'news',
            element: <BlogNews name='Blog News'/>
          },
          {
            path: 'related',
            element: <BlogRelated name='Blog Related'/>
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact name='Contact'/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: '*',
        element: <Error404/>
      }
    ]
  }
]