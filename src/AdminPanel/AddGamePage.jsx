import AddGameForm from './components/AddGameForm';

export default function AddGamePage() {
  return (
    <div className='mt-5 flex flex-col items-center justify-center sm:mt-20'>
      <h1 className='mb-4 text-2xl font-bold'>Add Games</h1>
      <div className='w-full max-w-md'>
        <AddGameForm />
      </div>
    </div>
  );
}
