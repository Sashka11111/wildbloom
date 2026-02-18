import { useMutation } from '@tanstack/react-query'

export const useAuth = () => {
  return useMutation({
    mutationFn: async (userData) => {
      // заглушка — імітує успішний логін
      return { token: 'fake-token', user: userData }
    },
    onSuccess: (data) => {
      console.log('Успішно увійшли!', data)
    },
    onError: (error) => {
      alert('Помилка входу: ' + error.message)
    },
  })
}
