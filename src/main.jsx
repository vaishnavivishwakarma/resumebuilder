
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router=createBrowserRouter([
  {

  element: <App/>, 
  children:[
    {
        path:'/',
        element:<Home/>
      },
    
    {
path: '/dashboard',
 element: <Dashboard/>
    }
  ]
  },
  {    
path: '/auth/sign-in',
 element:<SignInPage/>

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
