import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      'firstName': 'sarah',
      'lastName': 'kerrigan',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("firstName")} />
        </div>
        <div>
          <input {...register("lastName", { required: true })} />
        </div>
        <div>
          {errors.lastName && <span>This field is required</span>}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  )
}

export default App
