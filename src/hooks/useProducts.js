import { useQuery } from '@tanstack/react-query'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => [
      { id: 1, name: 'ЧАШКА «ДЮНА»', price: 90 },
      { id: 2, name: 'ТАРІЛКА «РАННЄ ЛІТО»', price: 78 },
    ],
  })
}
