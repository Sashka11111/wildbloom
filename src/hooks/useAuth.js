import { useMutation } from '@tanstack/react-query'
import api from '../api'

export const useAuth = () => {
  return useMutation({
    mutationFn: async (userData) => {
      const response = await api.get('/users')
      const allUsers = response.data

      const user = allUsers.find(
        (u) => u.email === userData.email && u.password === userData.password
      )

      if (!user) {
        throw new Error('Невірний email або пароль')
      }

      const token = btoa(`${user.email}:${Date.now()}`)
      localStorage.setItem('token', token)

      return { token, user }
    },
    onSuccess: (data) => {
      console.log('Успішно увійшли!', data)
    },
    onError: (error) => {
      alert('Помилка входу: ' + error.message)
    },
  })
}
