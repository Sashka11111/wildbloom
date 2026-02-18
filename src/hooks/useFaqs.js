import { useQuery } from '@tanstack/react-query'
import api from '../api'

export const useFaqs = () => {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      const response = await api.get('/faqs')
      return response.data
    },
  })
}
