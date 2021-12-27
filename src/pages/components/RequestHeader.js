import React from 'react'
import { useHttpClientContext } from '../../context'
import EditTable from './core/EditTable'

const RequestHeader = () => {
  const { header, setHeader } = useHttpClientContext();
  return (
    <div>
      <EditTable rows={header} setRows={setHeader} />
    </div>
  )
}

export default RequestHeader
