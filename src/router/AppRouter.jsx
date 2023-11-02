import { Routes,Route} from "react-router-dom"

import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from "../ui"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "../heroes/routes/PrivateRoute"
import { PublicRoute } from "../heroes/routes/PublicRoute"


export const AppRouter = () => {
  return (
<>

<Routes>
    
      <Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />

    <Route path="/*" element={
      <PrivateRoute>
        <HeroesRoutes/>
      </PrivateRoute>
    }/>
    {/* <Route path="/*" element={<HeroesRoutes/>}></Route>  */}

  
</Routes>


</>
  )
}
