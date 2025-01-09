import AppSidebar from "./AppSidebar"
import AppContent from "./AppContent"
import AppHeader from "./AppHeader"

const DefaultLayout = () => {
  return (
    <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
