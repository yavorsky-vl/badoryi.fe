import React, { Suspense } from 'react'
import { CContainer, CSpinner } from '@coreui/react'
 

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        {"test-string"}
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)