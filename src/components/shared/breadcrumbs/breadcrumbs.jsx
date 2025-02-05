export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="list-none p-0 flex space-x-2 text-gray-600 dark:text-gray-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-sm font-normal">
            {item.link ? (
              <a href={item.link} className="hover:text-blue-500">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-700 dark:text-gray-300">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="w-5 h-5 mx-2 text-gray-500 dark:text-gray-400">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#9aa0a6"
                  className=""
                  aria-hidden="true"
                >
                  <path d="M7.59 18.59L9 20l8-8-8-8-1.41 1.41L14.17 12"></path>
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
