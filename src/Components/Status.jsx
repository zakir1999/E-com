export default function Status() {


    const initialCounters=[
        {
            id:1,
            value:0,
        },{
            id:2,
            vlaue:0,
        }
    ]
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Status</h2>
      <div className="flex gap-4">
        <button
          onClick={() => alert("Status clicked!")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow"
        >
          Check Status
        </button>
      </div>
    </div>
  );
}