import { Outlet } from "react-router-dom"

const LayoutPublic = () => {
  return (

    <div>
      <Outlet />
      <footer> footer </footer>
    </div >

  )
}

export default LayoutPublic
