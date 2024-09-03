import Link from "next/link";

export function ButtonDemo() {
  return (
    <div className="relative">
      <Link
        title="WhatsUp"
        href="https://wa.me/message/CLAOT4PPP6VDO1"
        className="bg-gray-50 hover:bg-gray-100 py-2 px-4 text-blue-600 font-bold rounded-md fixed right-6 bottom-6 "
      >
        Buy Template
      </Link>
    </div>
  );
}
