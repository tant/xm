import Form from 'next/form'

export default function Home() {
  
  return (
    <div className="h-screen flex justify-center items-center bg-gray-500">
      <Form className="flex" action="/view">
        <div className="border flex rounded-lg p-2 bg-white">
          <p>https://github.com/</p>
          {/* cái autoFocus bị lỗi nhưng ignore được */}
          <input id="username" type="text" name="username" autoFocus placeholder="github username" />
        </div>
        <button className="px-3" type='submit'>Go </button>
      </Form>
    </div>
  );
}




