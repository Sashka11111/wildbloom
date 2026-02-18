import { useQuery } from '@tanstack/react-query'

export const useFaqs = () => {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: async () => [
      { id: 1, question: 'Чи можна мити в посудомийній машині?', answer: 'Рекомендуємо ручне миття.' },
      { id: 2, question: 'Чи безпечні глазурі?', answer: 'Так, сертифіковані харчові глазурі.' },
    ],
  })
}
