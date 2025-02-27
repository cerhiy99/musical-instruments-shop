"use client";
import React, { useEffect, useState, type ReactNode } from "react";
import LoaadMore from "@/public/loadMore.svg";
import ChevronLeft from "@/public/navigation/chevronleft.svg";
import ChevronRight from "@/public/navigation/chevronright.svg";
import "./PaginationComponent.scss";

const Pagination = ({
  onCurrentPage,
  onItemsPerPage,
  onTotalItems,
  totalItems,
  itemsPerPage,
  currentPage,
  totalPages,
}: {
  onCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  onItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  onTotalItems: React.Dispatch<React.SetStateAction<number>>;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
}) => {
  useEffect(() => {
    console.log(`[PAGINATION]: totalItems - ${totalItems}`);
    console.log(`[PAGINATION]: itemsPerPage - ${itemsPerPage}`);
    console.log(`[PAGINATION]: currentPage - ${currentPage}`);
    console.log(`[PAGINATION]: totalPages - ${totalPages}`);
  }, [totalItems, itemsPerPage, currentPage, totalPages]);
  // Стейт для текущей страницы и размера страницы
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);
  // const [totalItems, setTotalItems] = useState(100);
  // Предположим, у нас есть 100 элементов всего

  // Вычисляем общее количество страниц
  // const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Создаём массив номеров страниц для отображения
  const generatePageNumbers = () => {
    const maxPagesToShow = 5; // Максимальное количество номеров страниц для отображения

    if (totalPages <= maxPagesToShow) {
      // Если страниц меньше или равно maxPagesToShow, показываем все
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Иначе показываем первую, последнюю и страницы вокруг текущей
      if (currentPage <= 3) {
        // Если текущая страница близка к началу
        return [
          ...Array.from({ length: 4 }, (_, i) => i + 1),
          "...",
          totalPages,
        ];
      } else if (currentPage >= totalPages - 2) {
        // Если текущая страница близка к концу
        return [
          1,
          "...",
          ...Array.from({ length: 4 }, (_, i) => totalPages - 3 + i),
        ];
      } else {
        // Текущая страница где-то в середине
        return [
          1,
          "...",
          ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i),
          "...",
          totalPages,
        ];
      }
    }
  };

  // Обработчик клика по номеру страницы
  const handlePageClick = (page: number | string) => {
    if (page !== "..." && page !== currentPage) {
      // setCurrentPage(page);
      onCurrentPage(Number(page));
    }
  };

  // Обработчик клика по кнопке "Показать больше"
  const handleShowMore = () => {
    // Увеличиваем количество элементов на странице
    const newItemsPerPage = itemsPerPage + 10;
    // setItemsPerPage(newItemsPerPage);
    onItemsPerPage(newItemsPerPage);

    // Пересчитываем текущую страницу, чтобы сохранить позицию просмотра
    const newCurrentPage = Math.ceil(
      (currentPage * itemsPerPage) / newItemsPerPage
    );
    // setCurrentPage(newCurrentPage || 1);
    onCurrentPage(newCurrentPage || 1);
  };

  // Переход к предыдущей странице
  const goToPreviousPage = () =>
    // currentPage > 1 && setCurrentPage(currentPage - 1);
    currentPage > 1 && onCurrentPage(currentPage - 1);

  // Переход к следующей странице
  const goToNextPage = () =>
    // currentPage < totalPages && setCurrentPage(currentPage + 1);
    currentPage < totalPages && onCurrentPage(currentPage + 1);

  // Проверка активности кнопок
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const pageNumbers = generatePageNumbers();

  return (
    <div>
      <div className="pagination">
        {!isNextDisabled && (
          <button onClick={handleShowMore}>
            <LoaadMore width={21} height={21} />
            <p>Показать еще</p>
          </button>
        )}
      </div>
      <div className="pagination__pages">
        <div className="pages__container">
          <button
            className="page__prev page__arrow"
            onClick={goToPreviousPage}
            disabled={isPrevDisabled}
          >
            <ChevronLeft height={13} />
          </button>
          {pageNumbers.map((page, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(page as number)}
              className={`page ${currentPage === page && "currentPage"}`}
            >
              {page}
            </button>
          ))}

          <button
            className="page__next page__arrow"
            onClick={goToNextPage}
            disabled={isNextDisabled}
          >
            <ChevronRight height={13} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
