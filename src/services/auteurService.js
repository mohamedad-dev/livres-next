const AUTEUR_API = '/auteurs/'
export const fetchAuteurs = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API, {
    cache: 'no-store',
  })
  const response = await res.json()
  return response
}
