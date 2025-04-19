"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="text-2xl font-black text-gray-800">Algo salió mal!</h1>
      <p className="text-gray-600">{error.message}</p>
    </div>
  );
}