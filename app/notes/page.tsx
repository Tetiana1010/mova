import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import('../ui/notes/TextEditor'), { ssr: false });


const Note = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <TextEditor />
    </div>
  )
};

export default Note;