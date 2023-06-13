import { forwardRef } from 'react'
import CustomForm from "../components/CustomForm"

const DummyApi = forwardRef<HTMLDivElement, {}>(function DummyApi(_,ref) {
  return (
    <div id="dummy-api" ref={ref}>
        <CustomForm />
        {/* <div className="test">
          <p className="test-1">Tetst 1</p>
          <p className="test-2">Tetst 2</p>
        </div> */}
    </div>
  )
})

export default DummyApi