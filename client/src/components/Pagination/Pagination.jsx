import styles from "../Pagination/Pagination.module.css"

export default function Pagination({
  countryPerPage,
  allCountries,
  pagination,
  currentPage
}) {
  const pageNumbers = []
  const totalPages = Math.ceil(allCountries.length / countryPerPage)
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const handleClick = (pageNumber) => {
    pagination(pageNumber)
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers?.map((number) => (
          <li key={number}>
            <button
              className={currentPage === number ? styles.activeButton : ""}
              onClick={(event) => {
                event.preventDefault()
                handleClick(number)
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
