import { useSelector, useDispatch } from 'react-redux'
import { JobPosition } from './JobPosition';
import { selectAllPositions, selectVisiblePositions } from '../store/positions/position-selectors'
import { selectFilters } from '../store/filters/filter-selector'
import { addFilter } from '../store/filters/filter-action'

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters))
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export { JobList };