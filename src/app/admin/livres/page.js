import ListLivres from '@/components/livresComponents/ListLivres'
import { fetchLivres } from '@/services/livreService'

const getLivres = async () => {
  const data = await fetchLivres()
  return data
}
const LivrePage = async () => {
  const livres = await getLivres()
  return (
    <div>
      <ListLivres livres={livres} />
    </div>
  )
}
export default LivrePage
