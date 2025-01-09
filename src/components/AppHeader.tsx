import { cilMenu } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CHeader } from "@coreui/react"


const AppHeader = () => {
    return (
        <CHeader position="sticky" className="mb-4 p-0">
            <CIcon icon={cilMenu} size="lg" />
        </CHeader>
    )
}
export default AppHeader
