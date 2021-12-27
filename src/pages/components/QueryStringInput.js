import React from 'react'
import { useHttpClientContext } from '../../context'
import EditTable from './core/EditTable'

const QueryStringInput = () => {
  const { queryString, setQueryString } = useHttpClientContext();
  return (
    <div>
      <EditTable rows={queryString} setRows={setQueryString} />
    </div>
  )
}

export default QueryStringInput
