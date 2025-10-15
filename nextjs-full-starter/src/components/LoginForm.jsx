'use client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Mail, Lock } from 'lucide-react'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})

export default function LoginForm ({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data.email, data.password))}
      className='bg-white p-4 rounded shadow-md w-full max-w-sm'
    >
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>

      <div className='mb-4'>
        <label className='flex items-center gap-2 mb-1'>
          <Mail /> Email
        </label>
        <input
          {...register('email')}
          className='w-full px-3 py-2 border rounded'
        />
        {errors.email && (
          <p className='text-red-500 text-sm'>{errors.email.message}</p>
        )}
      </div>

      <div className='mb-4'>
        <label className='flex items-center gap-2 mb-1'>
          <Lock /> Password
        </label>
        <input
          type='password'
          {...register('password')}
          className='w-full px-3 py-2 border rounded'
        />
        {errors.password && (
          <p className='text-red-500 text-sm'>{errors.password.message}</p>
        )}
      </div>

      <div className='flex justify-center mt-4'>
        <button
          type='submit'
          className='w-auto p-2 align-center bg-green-600 text-white py-2 rounded hover:bg-blue-700'
        >
          Login
        </button>
      </div>
    </form>
  )
}
